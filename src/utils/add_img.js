import sunset from "../assets/image/Camping mountain sunset.webp";
import img2 from "../assets/image/2.jpeg";
import img3 from "../assets/image/3.jpeg";
import img4 from "../assets/image/4.jpeg";

const imgRef = [
  {
    src: sunset,
    alt: "some img",
    id: "1",
  },
  {
    src: img2,
    alt: "some img2",
    id: "2",
  },
  {
    src: img3,
    alt: "some img3",
    id: "3",
  },
  {
    src: img4,
    alt: "some img4",
    id: "4",
  },
];

function addImg(imgArr) {
  imgArr.forEach(({ src, alt, id }) => {
    document.getElementById(id).src = src;
    document.getElementById(id).alt = alt;
  });
}

// function addImg(src, id, alt) {
//   document.getElementById(id).src = src;
//   document.getElementById(id).alt = alt;
// }

addImg(imgRef);
// addImg(sunset, 1, "some img");
// addImg(img2, 2, "some2 img");
