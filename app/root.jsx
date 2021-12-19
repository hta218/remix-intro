import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import globalStyleURL from '~/styles/global.css'

export function meta() {
  return {
    title: "My first remix app",
    description: 'Yet another React framework',
    keywords: 'remix, react, framework'
  };
}

export function links() {
  return [
    { rel: 'stylesheet', href: globalStyleURL }
  ]
}

export default function App() {
  return (
    <Document title={'My first remix app'}>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  )
}