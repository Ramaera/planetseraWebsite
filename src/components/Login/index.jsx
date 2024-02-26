import { useState, useEffect } from "react";
import { IconButton, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { LOGIN } from "@/apollo/queries/index";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setOrUpdateUser } from "@/state/slice/userSlice";
import { Get_VIEW_CART } from "@/apollo/queries";
import { clearCart, storeInCart } from "@/state/slice/cartSlice";
import { usePathname } from "next/navigation";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = ({ isOpen, closeLoginModal }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const [active, setActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [ViewCartData, { loading, data, refetch }] = useLazyQuery(
    Get_VIEW_CART,
    {
      variables: { buyerId: user?.data?.buyer?.id },
    }
  );

  useEffect(() => {
    ViewCartData();
  }, [user]);

  if (active && user && data) {
    dispatch(clearCart());

    const updatedCartItems = data?.viewCart?.cartItem?.map((list) => ({
      id: list?.id,
      productVariantId: list?.productVariantId,
      qty: list?.qty,
      name: list?.name,
    }));
    updatedCartItems?.forEach((item) => {
      dispatch(storeInCart(item));
    });

    setActive(false);
  }

  const colorMe = useSelector((state) => state.colorUs.color);
  const [hide, setHide] = useState(closeLoginModal);
  const [login] = useMutation(LOGIN);
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.email) {
      toast.error("Email is not valid!");
      return;
    }

    if (!formData.password) {
      toast.error("Password is not valid!");
      return;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const resp = await login({
          variables: {
            email: formData.email,
            password: formData.password,
          },
        });

        const data = resp.data.login;
        // console.log("data", data.user);
        for (let key of Object.keys(data)) {
          localStorage.setItem(key, data[key]);
        }
        dispatch(setOrUpdateUser(data.user));
        setActive(true);
        closeLoginModal();
        router.refresh();
        if (pathname.toLowerCase() == "/register") {
          router.replace("/");
        }
      } catch (err) {
        toast.error(err.message);
        // toast.error(err.message);
      }
    }
  };

  // if (CartData.length > 0) {
  //   CartData?.map((item) =>
  //     addToCartServer({
  //       variables: {
  //         buyerId: data?.user?.buyer?.id,
  //         qty: item?.quantity,
  //         productVariantId: item?.id,
  //       },
  //     })
  //   );

  // await dispatch(clearCart());

  // await ViewCartData.refetch();

  // const updatedCartItems = ViewCartData?.data?.viewCart.map((list) => ({
  //   id: list?.productVariantIds,
  //   quantity: list?.qty,
  //   name: list?.name,
  // }));
  // dispatch(addToCart(updatedCartItems));
  // }
  return (
    <Modal open={isOpen} onClose={closeLoginModal}>
      <div className="flex items-center justify-center min-h-screen m-auto w-[90%] sm:w-full overflow-y-auto max-h-[60%] h-auto">
        <div
          className="fixed inset-0 bg-gray-600 opacity-75"
          onClick={closeLoginModal}></div>
        <div className="relative bg-white rounded-lg max-w-md w-full overflow-y-auto">
          <div className="relative p-8 sm:p-10 rounded-b-lg sm:rounded-r-lg">
            <IconButton
              aria-label="close"
              onClick={closeLoginModal}
              className="absolute top-2 right-2 ">
              <CancelIcon sx={{ color: "lightGrey", fontSize: 30 }} />
            </IconButton>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-800 text-center">
              Welcome Back , Login
            </h2>
            <img src="/images/logo/logo.webp" className="mx-auto my-4" />
            <h3 className="mb-2 text-xl sm:text-xl font-semibold text-slate-600  ">
              Please Enter Your Details
            </h3>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md px-4 py-2 border border-slate-300 text-black"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full rounded-md px-4 py-2 border border-slate-300 text-black"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </button>
              </div>

              <button
                type="submit"
                onClick={() => {
                  handleSubmit();
                }}
                style={{
                  backgroundImage: `linear-gradient(to right, ${colorMe}, ${
                    colorMe + "80"
                  })`,
                }}
                className="text-white rounded-lg py-2 px-4 w-full font-semibold sm:text-xl">
                Log In
              </button>
            </form>
            <p className="text-slate-600 text-sm mt-4 text-right">
              If not a User?{" "}
              <Link
                href={"/register"}
                style={{ color: colorMe, fontWeight: "bold" }}>
                Register Now
              </Link>
            </p>
          </div>
        </div>
        <Toaster />
      </div>
    </Modal>
  );
};

export default Login;
