import logoImage from "../assets/images/bitcoin.png"
import githubLogo from "../assets/images/github-logo.png"

const Header = () => {
    return (
        <div className="flex w-full justify-evenly items-center p-4 bg-gray-800">
        <a href=".">
        <img src={logoImage} className="w-7 h-7"/>
        </a>
        <h1 className="text-white text-2xl">Bitcoin Toolkit</h1>
        <a href="https://github.com/johnnywalker-git/bitcoin-toolkit/blob/main/README.md">
        <img src={githubLogo} className="w-7 h-7"/>
        </a>
        </div>
    )
}

export default Header