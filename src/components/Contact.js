import React from 'react'

function Contact() {
  return (
    <div>
        <section className="w-full py-16 px-6 bg-gray-50" id="contact">
<div className="max-w-xl mx-auto text-center">
<h2 className="text-4xl font-bold mb-6">Contact Us</h2>
<form className="flex flex-col gap-4 text-left">
<input
type="text"
placeholder="Your Name"
className="p-3 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
/>


<input
type="email"
placeholder="Your Email"
className="p-3 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
/>


<textarea
placeholder="Your Message"
rows="4"
className="p-3 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
></textarea>


<button
type="submit"
className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
>
Send Message
</button>
</form>
</div>
</section>

    </div>
  )
}

export default Contact