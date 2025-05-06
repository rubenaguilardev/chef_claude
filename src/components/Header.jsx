import chefClaudeLogo from '/src/assets/chef-claude.png'

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="chef claude logo"/>
            <h1>Chef Claude</h1>
        </header>
    )
}