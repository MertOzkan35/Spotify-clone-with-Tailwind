import { Menu } from "@headlessui/react";
import { Icon } from "../../Icons";
function Auth() {
  const user = {
    name: "Mert Özkan",
    avatar: "https://i.scdn.co/image/ab6775700000ee85f6dd039e2ccb49c7584715fe",
  };
  return (
    <Menu as="nav" className={"relative "}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2 ${
              open ? "bg-active" : "bg-black"
            }  hover:bg-active`}
          >
            <img
              src={user.avatar}
              className={"w-8 h-8 rounded-full p-px mr-2  object-cover"}
            />
            <span className=" text-sm font-semibold  mr-2 ">{user.name}</span>
            <span className={open == true && "rotate-180"}>
              <Icon size={16} name="down" />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2  "
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex font-semibold items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="#"
                >
                  Account Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex font-semibold items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`  h-10 flex font-semibold items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="#"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Auth;
