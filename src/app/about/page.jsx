import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            veniam exercitationem optio reiciendis delectus maiores fugiat
            tempore et sunt, officiis consequatur iste repudiandae? Veritatis
            dicta
            <br />
            <br />
            repellendus, consequuntur, beatae fugit esse error obcaecati odit
            rerum consequatur molestias nostrum labore cumque facilis nemo
            impedit ipsum voluptates quia ut soluta blanditiis, cupiditate
            corrupti.
          </p>
        </div>
        <div className={styles.item}>

        <h1 className={styles.title}>What We Do?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quaerat
          vero eius, earum architecto tenetur, odio incidunt deleniti fugit,
          ducimus commodi facere? Odio dignissimos earum obcaecati quaerat
          aspernatur. Quasi repellendus maiores molestiae asperiores vel commodi
          mollitia ducimus reprehenderit fuga enim quis impedit beatae, eligendi
          quas
          <br />
          <br />
          laboriosam odio cupiditate. Aut, quaerat?
        </p>
        <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
