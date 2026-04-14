import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Academic Excellence Hub | University Student Resources</title>
      </Head>

      <div style={{
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 20px',
      }}>
        
        {/* Navigation */}
        <nav style={{
          width: '100%',
          maxWidth: '1100px',
          padding: '30px 0',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #1a1a1a'
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
            STUDENT<span style={{ color: '#3b82f6' }}>SUCCESS</span>
          </div>
          <div style={{ color: '#666', fontSize: '0.9rem' }}>Resource Portal 2026</div>
        </nav>

        {/* Hero Section */}
        <main style={{
          maxWidth: '800px',
          textAlign: 'center',
          marginTop: '100px',
          paddingBottom: '100px'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '24px',
            background: 'linear-gradient(to bottom right, #fff 30%, #666)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Master Your Semester <br /> Without the Burnout.
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#888',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Providing US university students with premium academic guidance, 
            time-management frameworks, and expert coursework support.
          </p>

          {/* Premium Backlink Card */}
          <div style={{
            background: '#111',
            padding: '40px',
            borderRadius: '24px',
            border: '1px solid #222',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            textAlign: 'left'
          }}>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>Need immediate help with your classes?</h3>
            <p style={{ color: '#999', lineHeight: '1.7', fontSize: '1.1rem' }}>
              If you are feeling overwhelmed by deadlines, our verified academic partners can help. 
              You can securely 
              <a href="https://www.paysomeonetotakemyonlineclassforme.com/" style={{ 
                color: '#3b82f6', 
                textDecoration: 'none',
                fontWeight: '600',
                margin: '0 5px',
                borderBottom: '1px solid #3b82f6'
              }}>
                pay someone to take your online class for you
              </a> 
              and focus on what matters most.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer style={{
          marginTop: 'auto',
          padding: '40px 0',
          color: '#444',
          fontSize: '0.8rem',
          textAlign: 'center',
          width: '100%',
          borderTop: '1px solid #111'
        }}>
          &copy; 2026 Student Success Hub. Academic integrity and confidentiality guaranteed.
        </footer>
      </div>
    </>
  );
}
