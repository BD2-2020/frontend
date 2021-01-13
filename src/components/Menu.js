const Menu = [
  {
    label: "Start",
    pathname: "/"
  },
  {
    label: "Zarezerwuj auto",
    pathname: "/new_reservation",
    min_level: 1,
  },
  {
    label: "Moje rezerwacje",
    pathname: "/reservations",
    min_level: 1,
  },
  {
    label: "Wypożyczone",
    pathname: "/rentals",
    min_level: 1,
  },
  {
    label: "Zaloguj się",
    pathname: "/signin",
    max_level: 0,
  },
  {
    label: "Zarejestruj się",
    pathname: "/signup",
    max_level: 0,
  },
  {
    label: "Dodaj pracownika",
    pathname: "/add_employee",
    min_level: 2,
  },
  {
    label: "Samochody",
    pathname: "/cars",
    min_level: 1,
  },
  {
    label: "Dodaj samochód",
    pathname: "/add_car",
    min_level: 1,
  },

];

export default Menu;