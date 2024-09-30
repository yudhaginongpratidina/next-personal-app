export default function Page() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-screen-sm p-6 border flex flex-col gap-4 bg-white">

                <h1 className="text-3xl font-bold">LOGIN</h1>

                <form>
                    <div className="w-full flex flex-col gap-4">
                        <input
                            name="email"
                            type="email"
                            placeholder="user@gmail.com"
                            className="w-full border p-2 rounded outline-none"
                        />

                        <input
                            name="password"
                            type="password"
                            placeholder="******"
                            className="w-full border p-2 rounded outline-none"
                        />

                        <button className="w-full p-2 rounded bg-black text-white">
                            Login
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}