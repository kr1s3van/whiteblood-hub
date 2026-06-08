import React, { useState } from 'react';
import { Gamepad2, CheckCircle2, Swords, Trophy, Star, MapPin, Phone, Mail } from 'lucide-react';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({ name: '', date: '', game: 'Splatoon 3' });

  const services = [
    { id: 'coach', title: 'GOLD BLOOD TRAINING', desc: 'Deviens un pro.', icon: <Swords color="#f2cc8f" fill="#5c4033" size={32} /> },
    { id: 'match', title: 'ARENA ACCESS', desc: 'Ton arène privée.', icon: <Trophy color="#0047AB" fill="#0047AB" size={32} /> },
    { id: 'train', title: 'CHILL MODE', desc: 'Jouer pour le fun.', icon: <Star color="#95d5b2" fill="#95d5b2" size={32} /> },
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="scanline-overlay"></div>
      
      {/* HEADER */}
      <header className="container rpg-box mb-5 p-0">
        <div className="rpg-header text-center">
            <h1 className="pixel-font display-4 m-0 text-white" style={{ textShadow: '4px 4px 0px #5c4033' }}>
                WHITEBLOOD HUB
            </h1>
        </div>
        <div className="p-2 bg-white d-flex justify-content-center gap-4 pixel-font h5 m-0">
            <span>PLAYER: {formData.name || 'GUEST'}</span>
            <span style={{ color: '#ff85a2' }}>LEVEL: SEG3525</span>
            <span style={{ color: '#95d5b2' }}>STATUS: ONLINE</span>
        </div>
      </header>

      <main className="container">
        {step === 1 && (
          <div className="reveal">
            {/* ZONE HERO */}
            <div className="rpg-box mb-5 p-4 text-center" style={{ backgroundColor: '#fffcf2' }}>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="pixel-anim">
                          <div className="pixel-screen">
                            <div className="kirby-sprite"></div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h2 className="pixel-font display-5">WELCOME TO THE HUB!</h2>
                        <p className="fw-bold">Prêt à lancer une partie ? Choisis ta mission :</p>
                    </div>
                </div>
            </div>

            <div className="row g-4">
              {services.map((s) => (
                <div key={s.id} className="col-md-4">
                  <div className="card h-100 rpg-box p-4 text-center">
                    <div className="mb-3 d-flex justify-content-center">{s.icon}</div>
                    <h3 className="pixel-font h4 fw-bold">{s.title}</h3>
                    <p className="small">{s.desc}</p>
                    <button onClick={() => { setSelectedService(s.title); setStep(2); }}
                      className="btn pixel-btn w-100 mt-auto">
                      START
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ÉTAPE 2 : FORMULAIRE STYLE DIALOGUE RPG */}
        {step === 2 && (
          <div className="mx-auto rpg-box p-5 bg-white" style={{ maxWidth: '600px' }}>
            <h2 className="pixel-font h3 mb-4" style={{ color: '#ff85a2' }}>-- MISSION : {selectedService} --</h2>
            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
              <div className="mb-4">
                <label className="pixel-font h5">ENTER_PSEUDO:</label>
                <input type="text" className="form-control border-3 rounded-0" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="mb-4">
                <label className="pixel-font h5">SELECT_GAME:</label>
                <select className="form-select border-3 rounded-0" onChange={(e) => setFormData({...formData, game: e.target.value})}>
                  <option>Splatoon 3</option>
                  <option>Smash Bros Ultimate</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="pixel-font h5">DATE_TIME:</label>
                <input type="datetime-local" className="form-control border-3 rounded-0" required onChange={(e) => setFormData({...formData, date: e.target.value})} />
              </div>
              <div className="d-flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="btn pixel-btn btn-light w-50">QUIT</button>
                <button type="submit" className="btn pixel-btn w-50 text-white" style={{ backgroundColor: '#95d5b2' }}>CONFIRM</button>
              </div>
            </form>
          </div>
        )}

        {/* ÉTAPE 3 : SUCCÈS STYLE GAME OVER / WIN */}
        {step === 3 && (
          <div className="text-center p-5 rpg-box bg-white mx-auto" style={{ maxWidth: '600px' }}>
            <h2 className="pixel-font display-4" style={{ color: '#95d5b2' }}>MISSION COMPLETE!</h2>
            <p className="h4 pixel-font mb-4">GG {formData.name}!</p>
            <div className="p-3 my-4 rpg-box" style={{ backgroundColor: '#f2cc8f' }}>
              <p className="m-0 fw-bold">SESSION : {selectedService}</p>
              <p className="m-0 fw-bold">TIME : {new Date(formData.date).toLocaleString()}</p>
            </div>
            <button onClick={() => setStep(1)} className="btn pixel-btn text-white px-5" style={{ backgroundColor: '#ff85a2' }}>REPLAY</button>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="container mt-5">
        <div className="rpg-box p-4 bg-white">
            <div className="row text-center align-items-center">
                <div className="col-md-4 pixel-font">
                    <p className="m-0"> 123 PIXEL ST.</p>
                    <p className="m-0"> 555-8BIT</p>
                </div>
                <div className="col-md-4">
                    <p className="pixel-font h5 m-0">CREATED BY KRIS-EVAN</p>
                </div>
                <div className="col-md-4 pixel-font">
                    <p className="m-0">© 2026 HUB.SYS</p>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;