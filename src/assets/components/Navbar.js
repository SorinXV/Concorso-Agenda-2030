import '../styles/header.css';
export default function Navbar(){
  return (
    <div className='header '>
    <a href='/' className='logo'>Agenda 2030</a>
    <input type='checkbox' className='menuBtn' id='menuBtn' />
    <label for='menuBtn' className='menuIcon'>
      <span className='navIcon'></span>
    </label>
    <ul className='menu'>
      <li><a href='/'>Home</a></li>
      <li><a href='/obiettivo1'>Obiettivi</a></li>
      <li><a href='/quiz'>Quiz</a></li>
    </ul>
    </div>
  );
}