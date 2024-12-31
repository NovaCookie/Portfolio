import Footer from "@/components/Footer";
import Header from "@/components/Header";
import '../../public/styles/style.css'

export default function Rootlayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/styles/style.css" />
            </head>
            <body id="home">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

