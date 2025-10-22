import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 flex flex-col items-center gap-4">
      <div className="flex gap-6 text-2xl justify-center">
        <a href="https://wa.me/355685434665" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="hover:text-green-500" />
        </a>
        <a href="https://www.instagram.com/vivid_.decor_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-pink-500" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmQLXnDhhmgsbWCjXSSFDCSLQPVlJqJjRzFBKPqCdScPhpzZgdKzWDKZXFgftNhrlWJB" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <FaEnvelope className="hover:text-red-500" />
        </a>
      </div>

      <div>© {new Date().getFullYear()} Your Event Company</div>
    </footer>
  );
}

export default Footer;
