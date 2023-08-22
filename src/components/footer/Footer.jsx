// import React from "react";
// import styles from "./footer.module.css";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <div className={styles.container}>
//       <div>
//         {/* <div>c 2023 Lamamia. All rights reserved.</div> */}
//         {/* <img src="\../public/fb.png" alt="hello" /> */}
//         {/* <Image src="/fb.png" width={150} height={150} alt="slkdj" /> */}
//         <h2>hello</h2>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/fb.png" width={15} height={15} className={styles.icon} alt="Lama Dev Facebook Account" />
        <Image src="/insta.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
        <Image src="/youtube.png" width={15} height={15} className={styles.icon} alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;
