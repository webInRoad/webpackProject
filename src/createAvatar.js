import avatar from "./avatar.png";
import styles from "./index.scss";
function createAvatar() {
  var img = new Image();
  img.src = avatar;
  img.classList.add(styles.avatar);

  var root = document.getElementById("root");
  root.append(img);
}

export default createAvatar;
