const Menu = [
  {
    label: "Start",
    pathname: "/"
  },
  {
    label: "Zarezerwuj auto",
    pathname: "/new_reservation",
    min_level: 'customer',
  },
  {
    label: "Moje rezerwacje",
    pathname: "/reservations",
    min_level: 'customer',
  },
  {
    label: "Wypożyczone",
    pathname: "/rentals",
    min_level: 'customer',
  },
  {
    label: "Zaloguj się",
    pathname: "/signin",
    max_level: 'not_logged',
  },
  {
    label: "Zarejestruj się",
    pathname: "/signup",
    max_level: 'not_logged',
  },
  {
    label: "Dodaj pracownika",
    pathname: "/add_employee",
    min_level: 'admin',
  },
  {
    label: "Samochody",
    pathname: "/cars",
    min_level: 'worker',
  },
  {
    label: "Dodaj samochód",
    pathname: "/add_car",
    min_level: 'worker',
  },

];

export default Menu;