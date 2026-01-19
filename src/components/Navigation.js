import { ethers } from 'ethers';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = ethers.utils.getAddress(accounts[0])
            setAccount(account);

            // Switch to Hardhat network (31337)
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x7a69" }] // 0x7a69 = 31337
            })

        } catch (err) {
            console.error("Wallet connection / network switch error:", err)
        }
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1>AI NFT Generator</h1>
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;