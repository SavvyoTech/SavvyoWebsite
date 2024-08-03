import React from "react";
import styles from "./gridItemProduct.module.scss";
import Image from "next/image";
const GridItemProduct = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className={styles.gridItem}>
      <Image src={icon} alt="grid item" width={48} height={48} />
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
};

export default GridItemProduct;
