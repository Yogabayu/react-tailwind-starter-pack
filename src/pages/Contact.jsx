import React from "react";

function Contact() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold  mb-6">Hubungi Kami</h1>
          <p className="">
            Kami selalu siap untuk mendengar dari Anda. Silakan hubungi kami
            jika Anda memiliki pertanyaan, masukan, atau permintaan.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold ">Informasi Kontak:</h2>
            <a href="mailto:yogabayusbi@gmail.com" target="_blank">
              <p className="mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email: yogabayusbi@gmail.com
              </p>
            </a>
            <a href="https://www.instagram.com/yogabayu.ap/" target="_blank">
              <p className="mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#000"
                  className="mr-2"
                >
                  <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z"></path>
                </svg>
                Instagram: @yogabayu.ap
              </p>
            </a>
            <a href="https://www.facebook.com/bayu.angin.39/" target="_blank">
              <p className="mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#000"
                  className="mr-2"
                >
                  <path
                    d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-8 5c-3.87 0-7 2.9-7 6.48a6.3 6.3 0 0 0 2.6 5.05V19l2.4-1.3c.63.17 1.3.26 2 .26 3.87 0 7-2.9 7-6.48C19 7.9 15.87 5 12 5zm4.52 4.67l-3.82 4.06-1.79-1.9-3.48 1.9 3.83-4.06 1.83 1.9 3.43-1.9z"
                    className="mr-2"
                  />
                </svg>
                Messenger: Yoga Bayu Anggana Pratama
              </p>
            </a>
            <a href="https://www.youtube.com/channel/UC3PRXW7Wqjy_7oZIM-BNOAQ" target="_blank">
              <p className="mt-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000" className="mr-2"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm.294 7h-.589l-1.101.013c-1.48.024-3.709.092-4.465.285a1.836 1.836 0 0 0-1.326 1.263c-.181.644-.258 1.69-.29 2.46l-.022.815v.328l.008.426c.022.764.09 2.088.304 2.849.172.614.68 1.098 1.326 1.263.736.188 2.867.257 4.346.283L11.89 17l1.159-.008c1.453-.019 3.993-.082 4.811-.29a1.836 1.836 0 0 0 1.327-1.263c.21-.75.28-2.048.302-2.817l.01-.528-.003-.403c-.012-.67-.066-2.265-.31-3.13a1.836 1.836 0 0 0-1.326-1.263c-.661-.169-2.45-.242-3.878-.274L12.294 7zm-1.828 2.89l3.92 2.11-3.92 2.11V9.89z"/></svg>
                Youtube: Yoga Bayu Anggana Pratama
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
