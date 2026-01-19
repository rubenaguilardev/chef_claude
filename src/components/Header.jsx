import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className='shadow'>
            <div className='flex justify-center items-center gap-3 py-6'>
                <img 
                    src={logo} 
                    alt="Chef Claude logo"
                    className='w-11 h-13' 
                />
                <h1 className='text-[2rem]'>Chef Claude</h1>
            </div>
        </header>
    )
}

export default Header