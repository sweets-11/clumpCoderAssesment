import SearchBar from "@/components/SearchBar";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const List = () => {
    return (
        <div className="bg-gray-100">
            <SearchBar />

            <div className="flex justify-between p-5">
                <h3 className="text-xl font-bold">Pro Form Layout</h3>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Tasks</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/tasks/list">Task list</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

            </div>

            {/* form1 */}

            <div className="flex justify-around">



                <div className="bg-white text-black p-5 w-[500px] ml-5 shadow-md rounded-md">
                    <p className="text-lg mb-2 font-semibold">Contact Form 2</p>
                    <hr className="mb-4" />
                    <form>
                        <div className="flex justify-between gap-4 mb-4">
                            <div className="flex-1">
                                <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    placeholder="Enter your first name"
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="lastName" className="block mb-1 text-sm font-medium">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    placeholder="Enter your last name"
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between gap-4 mb-4">
                            <div className="flex-1">
                                <label htmlFor="email" className="block mb-1 text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="phone" className="block mb-1 text-sm font-medium">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <RadioGroup defaultValue="option-one">
                            <p className="mb-2">Select option</p>
                            <div className="flex justify-start justify-between">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Graphic Design</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">Web Development</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-three" id="option-three" />
                                    <Label htmlFor="option-three">Logo Design</Label>
                                </div>

                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-four" id="option-four" />
                                <Label htmlFor="option-four">Others</Label>
                            </div>
                        </RadioGroup>

                        <p className="text-lg mt-5 font-semibold">Message</p>
                        <textarea
                            placeholder="Type your message"
                            rows={5}
                            style={{
                                height: "150px",
                                width: "460px",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                            }}
                        ></textarea>



                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full bg-purple-700 text-white py-2 rounded-md"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>



                {/* form 2 */}


                <div className="bg-white text-black p-5 w-[500px] ml-5 shadow-md rounded-md">
                    <p className="text-lg mb-2 font-semibold">Survey Form</p>
                    <hr className="mb-4" />
                    <form>
                        <div className="gap-4 mb-4">
                            <div className="flex-1">
                                <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    id="firstName"
                                    placeholder="Enter your first name"
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="gap-4 mb-4">
                            <div className="flex-1">
                                <label htmlFor="email" className="block mb-1 text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="phone" className="block mb-1 text-sm font-medium">
                                    Age
                                </label>
                                <input
                                    id="age"
                                    placeholder="Enter your age number"
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <RadioGroup defaultValue="option-one">
                            <p className="mb-2">Which option best describes you?</p>
                            <div>
                                <div className="flex items-center space-x-2 mb-3">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Yes</Label>
                                </div>
                                <div className="flex items-center space-x-2 mb-3">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">No</Label>
                                </div>
                                <div className="flex items-center space-x-2 mb-3">
                                    <RadioGroupItem value="option-three" id="option-three" />
                                    <Label htmlFor="option-three">Maybe</Label>
                                </div>

                            </div>
                        </RadioGroup>

                        <p className="text-lg mt-5 font-semibold">Message</p>
                        <textarea
                            placeholder="Type your message"
                            rows={5}
                            style={{
                                height: "150px",
                                width: "460px",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                            }}
                        ></textarea>



                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full bg-purple-700 text-white py-2 rounded-md"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default List