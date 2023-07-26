"use client";
import SidebarWithNavbar from "../../../components/cmsNavbar";
import CsmSidebar from "../../../components/cmsNavbar/sidebar";
import { SketchPicker } from "react-color";
import ColorPicker from "../../../components/cms/colorPicker";
import CmsNavbar from "../../../components/cmsNavbar/navbar";
import { color } from "framer-motion";
import React from 'react';
import { userInfo } from "os";

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    color: 'var(--secondary-brown-darker, #362A1C)',
    textAlign: 'center',
    textShadow: '1px 4px 16px 0px rgba(122, 105, 100, 0.05)',
    fontFamily: 'Source Serif Pro',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    textTransform: 'capitalize',
  };

  const buttonStyle = {
    borderRadius: '50%',
    padding: '10px',
    backgroundColor: '#F0EBE5', // Couleur de l'intérieur du cercle
    border: '2px solid #CE7D37', // Couleur de la bordure du cercle
    fontSize: '20px', // Taille de la police pour les lettres à l'intérieur
    fontWeight: '600', // Poids de la police pour les lettres à l'intérieur
    fontFamily: 'Poppins', // Police pour les lettres à l'intérieur
    width: '40px', // Largeur du cercle
    height: '40px', // Hauteur du cercle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize', // Transformation du texte pour les lettres à l'intérieur
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <span>Welcome back Nasir</span>
      </div>
      <div>
        <button style={buttonStyle}>NG</button>
      </div>
    </nav>
  );
};

export default Navbar;
