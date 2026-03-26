// Marquee.jsx - Fixed
function Marquee() {
  return (
    <marquee
      direction="right"
      scrollamount="6"  // Changed from scrollAmount to scrollamount (lowercase)
      className="
        fixed bottom-16 left-0 w-full
        text-red-600 font-bold text-xl
        z-50 py-2
      "
    >
      📞9090300300
    </marquee>
  );
}

export default Marquee;