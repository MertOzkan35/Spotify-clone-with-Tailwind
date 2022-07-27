import { Icon } from "../../Icons";
function Download() {
  return (
    <a
      href="#"
      className="h-10 flex text-sm font-semibold text-link hover:text-white gap-x-4 item-center px-6"
    >
      <Icon name="arrow" size={20} />
      Uygulamayı Yükle
    </a>
  );
}

export default Download;
