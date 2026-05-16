import React, { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
const [showPayment, setShowPayment] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Starter");

  const packages = [
    { name: "Starter", price: "₹149", premium: false },
    { name: "Basic", price: "₹349", premium: false },
    { name: "Advanced", price: "₹549", premium: false },
    { name: "Golden Pro", price: "₹1149", premium: true },
    { name: "Golden Elite", price: "₹1599", premium: true },
    { name: "Golden Empire", price: "₹2499", premium: true },
  ];

  const handleEnroll = (pkg) => {
    setSelectedPackage(pkg);
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  const handleSubmit = () => {
    alert("Request Submitted Successfully");
  };

  const footerLink = {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "18px",
  };

  const inputStyle = {
    width: "100%",
    padding: "18px",
    marginBottom: "18px",
    borderRadius: "16px",
    border: "1px solid #333",
    background: "#0a0a0a",
    color: "white",
    fontSize: "16px",
  };

  const styles = {
    page: {
      backgroundColor: "#000",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    nav: {
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "20px",
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "space-between",
    },
    hero: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    section: {
      padding: "100px 20px",
      maxWidth: "1200px",
      margin: "auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: "20px",
    },
    card: {
      background: "#111",
      padding: "30px",
      borderRadius: "20px",
    },
    premiumCard: {
      background: "linear-gradient(180deg,#3b2a00,#111)",
      padding: "30px",
      borderRadius: "20px",
    },
    button: {
      width: "100%",
      padding: "15px",
      marginTop: "20px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
    },
    formWrapper: {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "120px 20px",
  boxSizing: "border-box",
},
    form: {
      width: "100%",
maxWidth: "500px",
boxSizing: "border-box",
      background: "#111",
      padding: "30px",
      borderRadius: "20px",
    },
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div
  style={{
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: '-40%',
      left: '-120%',
      width: '250%',
      height: '200%',
      background:
        'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
      filter: 'blur(18px)',
      animation: 'flameMove 3s linear infinite',
      pointerEvents: 'none',
    }}
  />

  <h1
    style={{
      margin: 0,
      fontSize: '24px',
      position: 'relative',
      zIndex: 2,
    }}
  >
    SeviTrusted
  </h1>
</div>
      </nav>

      {!showForm ? (
        <>
          <section style={styles.hero}>
            <p>PREMIUM AFFILIATE AGENCY</p>
            <h1 style={{ fontSize: "60px" }}>SeviTrusted Growth</h1>
          </section>

          <section style={styles.section}>
            <h2>Packages</h2>

            <div style={styles.grid}>
              {packages.map((pkg, i) => (
                <div key={i} style={pkg.premium ? styles.premiumCard : styles.card}>
                  <h3>{pkg.name}</h3>
                  <h1>{pkg.price}</h1>

                  <button onClick={() => handleEnroll(pkg.name)} style={styles.button}>
                    Enroll
                  </button>
                </div>
              ))}
            </div>
          </section>
<section
  style={{
    padding: '120px 20px',
    background: '#050505',
  }}
>
  <h2
    style={{
      textAlign: 'center',
      fontSize: '52px',
      marginBottom: '70px',
    }}
  >
    Why Choose SeviTrusted
  </h2>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: 'auto',
    }}
  >
    {[
      {
        title: 'Premium Growth',
        text: 'Modern growth systems designed for creators and online businesses.',
      },
      {
        title: 'Fast Support',
        text: 'Quick response support and direct communication for clients.',
      },
      {
        title: 'Luxury Branding',
        text: 'High-end visuals and conversion focused strategies.',
      },
    ].map((item, i) => (
      <div
        key={i}
        style={{
          background: '#111',
          padding: '40px',
          borderRadius: '24px',
          border: '1px solid #222',
        }}
      >
        <h3 style={{ fontSize: '28px', marginBottom: '18px' }}>
          {item.title}
        </h3>

        <p
          style={{
            color: '#999',
            lineHeight: 1.8,
            fontSize: '17px',
          }}
        >
          {item.text}
        </p>
      </div>
    ))}
  </div>
</section>
<section
  style={{
    padding: '100px 20px',
    borderTop: '1px solid #111',
    borderBottom: '1px solid #111',
  }}
>
  <div
    style={{
      maxWidth: '1100px',
      margin: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: '30px',
      textAlign: 'center',
    }}
  >
    {[
      ['120+', 'Clients'],
      ['98%', 'Satisfaction'],
      ['24/7', 'Support'],
      ['6', 'Premium Plans'],
    ].map((stat, i) => (
      <div key={i}>
        <h1
          style={{
            fontSize: '58px',
            marginBottom: '10px',
          }}
        >
          {stat[0]}
        </h1>

        <p style={{ color: '#888', fontSize: '18px' }}>{stat[1]}</p>
      </div>
    ))}
  </div>
</section>
<section
  style={{
    padding: '120px 20px',
    maxWidth: '1200px',
    margin: 'auto',
  }}
>
  <h2
    style={{
      textAlign: 'center',
      fontSize: '52px',
      marginBottom: '60px',
    }}
  >
    Client Reviews
  </h2>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: '30px',
    }}
  >
    {[
      'Professional service and clean communication throughout the process.',
      'The premium plans helped improve our online growth quickly.',
      'Luxury design and smooth support experience from start to finish.',
    ].map((review, i) => (
      <div
        key={i}
        style={{
          background: '#111',
          padding: '40px',
          borderRadius: '24px',
          border: '1px solid #222',
        }}
      >
        <p
          style={{
            color: '#bbb',
            lineHeight: 1.8,
            fontSize: '17px',
          }}
        >
          “{review}”
        </p>
      </div>
    ))}
  </div>
</section>
<section
  style={{
    padding: "100px 20px",
    textAlign: "center",
    borderTop: "1px solid #222",
  }}
>
  <h2
    style={{
      fontSize: "48px",
      marginBottom: "30px",
    }}
  >
    Contact Us
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="https://wa.me/917085586011"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#aaa",
        textDecoration: "none",
        fontSize: "20px",
      }}
    >
      WhatsApp
    </a>

    <a
      href="https://instagram.com/_2us.me_"
      target="_blank"
      rel="noreferrer"
      style={{
        color: "#aaa",
        textDecoration: "none",
        fontSize: "20px",
      }}
    >
      Instagram
    </a>

    <a
      href="#"
      style={{
        color: "#555",
        textDecoration: "none",
        fontSize: "20px",
        cursor: "default",
      }}
    >
      Facebook
    </a>
  </div>
</section>
        </>
      ) : (
        <div style={styles.formWrapper}>
{showPayment && (
  <div
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.95)',
      zIndex: 3000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}
  >
    <div
      style={{
        background: '#111',
        padding: '40px',
        borderRadius: '30px',
        width: '100%',
        maxWidth: '450px',
        textAlign: 'center',
        border: '1px solid #222',
      }}
    >
      <button
        type="button"
        onClick={() => setShowPayment(false)}
        style={{
          background: 'transparent',
          border: '1px solid #333',
          color: 'white',
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '20px',
          marginBottom: '20px',
        }}
      >
        ←
      </button>

      <h1
        style={{
          marginBottom: '25px',
          fontSize: '36px',
        }}
      >
        UPI Payment
      </h1>

      <img
        src="YOUR_IMAGE_URL_HERE"
        alt="UPI QR"
        style={{
          width: '250px',
          borderRadius: '20px',
          marginBottom: '25px',
        }}
      />

      <p
        style={{
          color: '#aaa',
          lineHeight: 1.8,
        }}
      >
        Scan the QR code using any UPI app.
      </p>
    </div>
  </div>
)}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
            style={styles.form}
          >
            <h1><div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '30px',
  }}
>
  <button
    type="button"
    onClick={() => setShowForm(false)}
    style={{
      background: 'transparent',
      border: '1px solid #333',
      color: 'white',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '20px',
    }}
  >
    ←
  </button>

  <h1 style={{ fontSize: '48px', margin: 0 }}>
    Enrollment Form
  </h1>
</div></h1>

            <input
  type="hidden"
  name="access_key"
  value="1971304e-5d27-4a09-ac36-9df7accaae84"
/>

<input
  type="hidden"
  name="redirect"
  value="https://sevitrusted.vercel.app/"
/>

            <input name="firstName" placeholder="First Name" required style={inputStyle} />
            <input name="lastName" placeholder="Last Name" required style={inputStyle} />
            <input name="email" placeholder="Email" required style={inputStyle} />
            <input name="phone" placeholder="Phone" required style={inputStyle} />

            <select name="package" defaultValue={selectedPackage} style={inputStyle}>
              {packages.map((p, i) => (
                <option key={i}>{p.name}</option>
              ))}
            </select>
<div
  style={{
    marginTop: '40px',
    padding: '30px',
    border: '1px solid #222',
    borderRadius: '20px',
    background: '#0a0a0a',
  }}
>
  <h2
    style={{
      marginBottom: '25px',
      fontSize: '30px',
    }}
  >
    Payment Method
  </h2>

  <button
    type="button"
    onClick={() => setShowPayment(true)}
    style={{
      width: '100%',
      padding: '18px',
      borderRadius: '16px',
      border: 'none',
      background: 'white',
      color: 'black',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px',
    }}
  >
    Pay Using UPI
  </button>
</div>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
const flameStyle = document.createElement('style');
flameStyle.innerHTML = `
@keyframes flameMove {
  0% {
    transform: translateX(-40%) skewX(-20deg);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  50% {
    opacity: 0.9;
  }

  100% {
    transform: translateX(40%) skewX(-20deg);
    opacity: 0;
  }
}
`;

document.head.appendChild(flameStyle);