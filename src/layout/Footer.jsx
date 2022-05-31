function Footer () {
  return <footer className="page-footer pink lighten-1">
  <div className="footer-copyright">
    <div className="container">
    © {new Date().getFullYear()} Copyright Text
    <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
    </div>
  </div>
</footer>
}

export {Footer}