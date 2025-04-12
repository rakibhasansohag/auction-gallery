# Auction Gallery

An interactive auction marketplace platform built with React, Tailwind CSS, and DaisyUI where users can browse active auctions and add items to their favorites.

![Auction Gallery Screenshot](https://i.ibb.co/k2kxXDXR/auctions.png)

## 🚀 Features

- **Splash Screen**: Engaging intro animation when first loading the site
- **Responsive Navigation**: Mobile-friendly navbar with smooth hover effects
- **Active Auctions Listing**: Browse current auction items in a clean table layout
- **Favorites System**: Add and remove auction items to your favorites with animated transitions
- **Real-time Updates**: Visual feedback for user interactions with toast notifications
- **Local Storage**: Favorites persist between sessions using browser storage
- **Fully Responsive**: Optimized for all device sizes

## 📋 Project Structure

```
B11A7-Simple-React-Assignment/
├── public/
│   ├── auctions.json
│   ├── avatar.jpg
│   ├── banner.png
│   └── free_palestine1.jpg
├── src/
│   ├── components/
│   │   ├── Auctions/
│   │   │   └── Auctions.jsx
│   │   ├── Banner.jsx
│   │   ├── Footer.jsx
│   │   ├── GotoTop.jsx
│   │   ├── Navbar.jsx
│   │   └── Splash.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## 🛠️ Technologies Used

- **React**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS
- **React Icons**: Popular icon library
- **React Toastify**: Toast notifications
- **Local Storage API**: For persisting user favorites

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/ProgrammingHero1/B11A7-Simple-React-Assignment.git
   cd B11A7-Simple-React-Assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📄 Usage

After installation, the application will be available at `http://localhost:5173/` (or your configured port).

- Browse the active auctions table to see available items
- Click the heart icon to add items to your favorites
- Items in your favorites will have their bid amount calculated in the total
- Remove items from favorites using the cancel button

## 📱 Responsive Design

The application is fully responsive with optimized layouts for:
- Mobile devices
- Tablets
- Desktop screens

## 🔒 Local Storage

Favorites are stored in the browser's local storage, allowing them to persist even when the browser is closed or refreshed.

## 🎨 Customization

### Tailwind Configuration

You can customize the application's appearance by modifying the `tailwind.config.js` file:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Add your custom colors, fonts, etc. here
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // DaisyUI configuration
  }
};
```

## 🚧 Future Enhancements

- User authentication and profiles
- Real-time bidding functionality
- Advanced search and filtering options
- Payment integration
- Admin dashboard for auction management

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👨‍💻 Author

Made with ❤️ by [Rakib Hasan Sohag](https://github.com/rakibhasansohag)

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://github.com/fkhadra/react-toastify)
- [Programming-Hero](https://github.com/programminghero1)
