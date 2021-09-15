let apiUrl = `https://xkcd.now.sh/?comic=latest`;

const displayImage = (image) => {
  const img = document.createElement("img");
  img.src = image.img;
  img.alt = image.alt;
  document.body.prepend(img);
};

const humourDisplay = async () => {
  try {
      const res = await fetch(apiUrl);
      data = await res.json();
      console.log(data);
      displayImage(data);
  }catch (error){
      console.error(error);
  }
}

window.onload = humourDisplay;