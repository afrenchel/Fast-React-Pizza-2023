
import {Link} from "react-router-dom"
const Button = ({children,disabled,to,type}) => {

 

const base="bg-yellow-500 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-400 focus:bg-yellow-400 disabled:cursor-not-allowed "

const styles={

  primary:base+ 'px-4 py-3 md:px-6 md:py-4',
  small: base+ " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  secondary:"  border-2 text-sm border-stone-300uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-stone-200 focus:bg-stone-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5  hover:text-stone-800 uppercase"

}


  if(to)
  return <Link to={to} className={styles[type]}>{children}</Link>


  return (
    <button disabled={disabled} className={styles[type]}>{children}</button>
  )
}

export default Button