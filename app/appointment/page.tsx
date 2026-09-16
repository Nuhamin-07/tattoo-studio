export default function Appointment() {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-4">Book an Appointment</h1>
            <form>
                <h3>Choose Your Artist</h3>
                <div className="flex gap-3">
                    <label className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white" htmlFor="Dereje">
                        <input className="sr-only peer" type="radio" id="Dereje" name="artist" value="Dereje" />
                        Dereje
                    </label>
                    <label className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white" htmlFor="Selam">
                        <input className="sr-only peer" type="radio" id="Selam" name="artist" value="Selam" />
                        Selam
                    </label>
                    <label className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white" htmlFor="Dawit">
                        <input className="sr-only peer" type="radio" id="Dawit" name="artist" value="Dawit" />
                        Dawit
                    </label>
                    <label className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white" htmlFor="Alem">
                        <input className="sr-only peer" type="radio" id="Alem" name="artist" value="Alem" />
                        Alem
                    </label>
                </div>
                <div>
                    <h3>Choose your service</h3>
                    <div className="grid grid-cols-3 gap-3">
                        <label className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white" htmlFor="piercing">
                            <input className="sr-only peer" type="radio" id="consultation" name="service" value="Tattoo Consultation" />
                            Tattoo Consultation
                        </label>
                        <label className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white" htmlFor="tattoo">
                            <input className="sr-only peer" type="radio" id="tattoo" name="service" value="Custom Tattoo" />
                            Custom Tattoo
                        </label>
                        <label className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white" htmlFor="tattoo">
                            <input className="sr-only peer" type="radio" id="tattoo" name="service" value="Cover Up Tattoo" />
                            Cover Up Tattoo
                        </label>
                        <label className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white" htmlFor="tattoo">
                            <input className="sr-only peer" type="radio" id="tattoo" name="service" value="Touch Up Tattoo" />
                            Touch Up Tattoo
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}