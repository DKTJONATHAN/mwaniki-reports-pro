function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mwaniki's Report</h3>
            <p className="text-gray-300">Your source for the latest news and gossip.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-accent">Home</a></li>
              <li><a href="/category/news" className="hover:text-accent">News</a></li>
              <li><a href="/category/gossip" className="hover:text-accent">Gossip</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: <a href="mailto:info@jonathanmwaniki.co.ke" className="hover:text-accent">info@jonathanmwaniki.co.ke</a></p>
            <p className="text-gray-300">Twitter: <a href="https://x.com/maestropuns" className="hover:text-accent">@maestropuns</a></p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Mwaniki's Report. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer