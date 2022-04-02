function MenuItem(props) {
  return (
    <li>
      <a href={props.url}>{props.title}</a>
    </li>
  );
}

function PokemonCard(props) {
  return (
    <li
      style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.25)", textAlign: "center" }}
    >
      <img src={props.image} alt={props.name} />
      <div style={{ padding: "18px" }}>
        <div>Name: {props.name}</div>
        <div>Type: {props.type}</div>
      </div>
    </li>
  );
}

const menuData = [
  {
    title: "Phòng khách",
    url: "https://shophouse.netlify.app/pages/product-list.html?category=living-room?arrange=most-purchased",
  },
  {
    title: "Phòng ngủ",
    url: "https://shophouse.netlify.app/pages/product-list.html?category=bed-room?arrange=most-purchased",
  },
  {
    title: "Nhà bếp",
    url: "https://shophouse.netlify.app/pages/product-list.html?category=kitchen?arrange=most-purchased",
  },
  {
    title: "Trẻ em",
    url: "https://shophouse.netlify.app/pages/product-list.html?category=kids?arrange=most-purchased",
  },
  {
    title: "Sân vườn",
    url: "https://shophouse.netlify.app/pages/product-list.html?category=garden?arrange=most-purchased",
  },
  {
    title: "Thiết bị nội thất",
    url: "https://shophouse.netlify.app/pages/product-list.html?category=appliances?arrange=most-purchased",
  },
  {
    title: "Khuyến mãi",
    url: "https://shophouse.netlify.app/pages/product-list.html?category=sale?arrange=most-purchased",
  },
];

const pokedex = [
  {
    id: 1,
    name: "Charmander",
    type: "fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 2,
    name: "Squirtle",
    type: "water",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 3,
    name: "Butterfree",
    type: "flying",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    id: 4,
    name: "Rattata",
    type: "normal",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 5,
    name: "Metapod",
    type: "bug",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
];

const category = [
  {
    href: "/user",
    title: "User",
    subMenu: [
      {
        href: "/user/information",
        title: "User information",
      },
      {
        href: "/user/purchase",
        title: "User purchase",
      },
    ],
  },
  {
    href: "/class",
    title: "Class",
    subMenu: [
      {
        href: "/user/front-end",
        title: "Front-end",
      },
      {
        href: "/user/back-end",
        title: "Back-end",
      },
    ],
  },
  { href: "/", title: "Home" },
];

function MenuItemWithSubMenu({ subMenu, href, title }) {
  if (subMenu) {
    return (
      <li className="menu-item">
        <a href={href}>
          <strong>{title}</strong>
        </a>
        <ul className="sub-menu">
          {subMenu.map((sub, i) => (
            <li key={sub.title} style={{ animationDelay: `${i * 1}s` }}>
              <a href={sub.href}>- {sub.title}</a>
            </li>
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li className="menu-item">
        <a href={href}>
          <strong>{title}</strong>
        </a>
      </li>
    );
  }
}

function App() {
  return (
    <div>
      <ul className="menu-list">
        {menuData.map(({ title, url }) => (
          <MenuItem key={title} title={title} url={url} />
        ))}
      </ul>

      <ul className="pokedex-list">
        {pokedex.map(({ id, name, type, image }) => (
          <PokemonCard key={id} name={name} type={type} image={image} />
        ))}
      </ul>

      <ul className="list-sub-menu">
        {category.map(({ subMenu, href, title }) => (
          <MenuItemWithSubMenu subMenu={subMenu} href={href} title={title} />
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
