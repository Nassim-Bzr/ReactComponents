import img from "/public/image-omelette.jpeg";


function Header() {
    return (
      <div>
        <img src={img} alt="" className="img-home" />
        <h1 className="Title-omelette">Simple Omelette Recipe</h1>
        <p className="text-omelette">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    );
  }

  export default Header;