import React from "react";
import { motion } from "framer-motion";

const heroVideos = [
  {
    title: "New Season",
    subtitle: "Modern silhouettes, premium textures, standout details.",
    video:
      "https://videos.pexels.com/video-files/6769791/6769791-sd_640_360_25fps.mp4",
  },
  {
    title: "City Icons",
    subtitle: "Day-to-night pieces with a clean editorial feel.",
    video:
      "https://videos.pexels.com/video-files/6316263/6316263-sd_640_360_25fps.mp4",
  },
];

const featuredCollections = [
  {
    title: "Dresses",
    desc: "Soft movement and statement cuts.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bags",
    desc: "Structured forms for everyday luxury.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Denim",
    desc: "Refined staples, easy to style.",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
  },
];

const newArrivals = [
  {
    name: "Tailored Trench",
    price: "$189",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Leather Mini Bag",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "High-Rise Denim",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Minimal Heels",
    price: "$119",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=900&auto=format&fit=crop",
  },
];

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    color: "#111111",
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "rgba(0,0,0,0.35)",
    color: "white",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
  },
  brand: {
    fontSize: "24px",
    fontWeight: "600",
    letterSpacing: "0.3em",
  },
  navLinks: {
    display: "flex",
    gap: "28px",
    fontSize: "14px",
    textTransform: "uppercase",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minHeight: "100vh",
  },
  heroPanel: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  heroVideo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
  },
  heroContent: {
    position: "absolute",
    left: "50px",
    bottom: "60px",
    color: "white",
    maxWidth: "500px",
  },
  heroTag: {
    fontSize: "12px",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
    opacity: 0.8,
    marginBottom: "12px",
  },
  heroTitle: {
    fontSize: "56px",
    fontWeight: "700",
    lineHeight: 1.1,
    margin: 0,
  },
  heroText: {
    marginTop: "16px",
    fontSize: "16px",
    lineHeight: 1.6,
    opacity: 0.9,
  },
  buttonRow: {
    display: "flex",
    gap: "12px",
    marginTop: "24px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "12px 24px",
    borderRadius: "999px",
    border: "none",
    background: "white",
    color: "black",
    fontWeight: "600",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "12px 24px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.4)",
    background: "transparent",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 24px",
  },
  sectionTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "32px",
  },
  sectionTag: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.3em",
    color: "#777",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "42px",
    margin: 0,
  },
  collectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  collectionCard: {
    borderRadius: "28px",
    overflow: "hidden",
    position: "relative",
    height: "520px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },
  collectionImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  collectionOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))",
  },
  collectionText: {
    position: "absolute",
    left: "24px",
    bottom: "24px",
    color: "white",
  },
  promo: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px 80px 24px",
  },
  promoWrap: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    background: "#111",
    color: "white",
    borderRadius: "32px",
    overflow: "hidden",
  },
  promoLeft: {
    padding: "56px",
  },
  promoRight: {
    minHeight: "320px",
  },
  promoVideo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  arrivalsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
  },
  productCard: {
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    background: "white",
  },
  productImageWrap: {
    background: "#f3f3f3",
    height: "380px",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  productInfo: {
    padding: "18px",
  },
  footer: {
    borderTop: "1px solid #eee",
    padding: "48px 24px",
    marginTop: "30px",
  },
  footerWrap: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
    gap: "32px",
  },
};

export default function HomePage() {
  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <div style={styles.brand}>AURELLE</div>
        <div style={styles.navLinks}>
          <span>Women</span>
          <span>New In</span>
          <span>Bags</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>Sale</span>
        </div>
      </header>

      <section style={styles.heroGrid}>
        {heroVideos.map((item, i) => (
          <div key={i} style={styles.heroPanel}>
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              style={styles.heroVideo}
            />
            <div style={styles.heroOverlay}></div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              style={styles.heroContent}
            >
              <div style={styles.heroTag}>Editorial Drop</div>
              <h1 style={styles.heroTitle}>{item.title}</h1>
              <p style={styles.heroText}>{item.subtitle}</p>
              <div style={styles.buttonRow}>
                <button style={styles.primaryBtn}>Shop Now</button>
                <button style={styles.secondaryBtn}>Watch Story</button>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      <section style={styles.section}>
        <div style={styles.sectionTop}>
          <div>
            <div style={styles.sectionTag}>Collections</div>
            <h2 style={styles.sectionTitle}>Shop by mood</h2>
          </div>
        </div>

        <div style={styles.collectionGrid}>
          {featuredCollections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              style={styles.collectionCard}
            >
              <img src={item.image} alt={item.title} style={styles.collectionImage} />
              <div style={styles.collectionOverlay}></div>
              <div style={styles.collectionText}>
                <h3 style={{ fontSize: "30px", margin: 0 }}>{item.title}</h3>
                <p style={{ marginTop: "8px", opacity: 0.9 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={styles.promo}>
        <div style={styles.promoWrap}>
          <div style={styles.promoLeft}>
            <div style={styles.sectionTag}>Campaign</div>
            <h2 style={{ fontSize: "44px", marginTop: 0 }}>
              Motion-first homepage with luxury storefront energy
            </h2>
            <p style={{ lineHeight: 1.7, opacity: 0.85 }}>
              Use full-width autoplay videos, bold overlay headlines, clean product
              grids, and minimal navigation to get a premium fashion look.
            </p>
            <div style={styles.buttonRow}>
              <button style={styles.primaryBtn}>Explore Now</button>
              <button style={styles.secondaryBtn}>Lookbook</button>
            </div>
          </div>

          <div style={styles.promoRight}>
            <video
              src="https://videos.pexels.com/video-files/7588549/7588549-sd_640_360_25fps.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={styles.promoVideo}
            />
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionTop}>
          <div>
            <div style={styles.sectionTag}>Edit</div>
            <h2 style={styles.sectionTitle}>New arrivals</h2>
          </div>
        </div>

        <div style={styles.arrivalsGrid}>
          {newArrivals.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              style={styles.productCard}
            >
              <div style={styles.productImageWrap}>
                <img src={item.image} alt={item.name} style={styles.productImage} />
              </div>
              <div style={styles.productInfo}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px" }}>{item.name}</h3>
                    <p style={{ marginTop: "6px", color: "#777" }}>Premium Collection</p>
                  </div>
                  <span style={{ fontWeight: "600" }}>{item.price}</span>
                </div>
                <button
                  style={{
                    ...styles.primaryBtn,
                    width: "100%",
                    marginTop: "16px",
                    background: "#111",
                    color: "white",
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerWrap}>
          <div>
            <div style={styles.brand}>AURELLE</div>
            <p style={{ marginTop: "14px", color: "#666", lineHeight: 1.7 }}>
              A modern fashion storefront concept built with React and motion-based sections.
            </p>
          </div>

          <div>
            <h4>Shop</h4>
            <p>Women</p>
            <p>Bags</p>
            <p>Shoes</p>
            <p>Accessories</p>
          </div>

          <div>
            <h4>Help</h4>
            <p>Contact</p>
            <p>Shipping</p>
            <p>Returns</p>
            <p>FAQ</p>
          </div>

          <div>
            <h4>About</h4>
            <p>Our Story</p>
            <p>Journal</p>
            <p>Careers</p>
            <p>Stores</p>
          </div>
        </div>
      </footer>
    </div>
  );
}