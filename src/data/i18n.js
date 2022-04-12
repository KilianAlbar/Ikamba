import i18n from 'i18next';
import {  initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "hometitle":"About us, Ikamba Organics:",
          "hometext":"IKAMBA LAB is a platform for the sale of organic compounds that are weakly or not available on the market. As a branch of the company IKAMBA Organics, IKAMBA LAB provides organic compounds in the fields of organic photovoltaic, energy storage and fine chemistry. Our products are issued from the know-how of the company IKAMBA Organics and its partners.",
          "cartBtnText":"your cart",
          "Contact":"Contact US",
          "ContactAdress":"Adress",
          "Login":"Log in",
          "Register":"Register",
          "Account":"My Account",
          "Orders":"My Orders",
          "Logout":"Log out",
          "SignUpPage":"Sign Up",
          "FirstName":"First Name",
          "LastName":"Last Name",
          "Password":"Password",
          "PasswordConfirm":"Password Confirmation",
          "AlreadyAcc":"Already have an account? ",
          "ForgotPass":"Forgot password?",
          "EnterEmail":"Enter your email",
          "ResetPass":"Reset ",
          "NeedAccount":"Need an account?",



          
        }
      },
      fr: {
        translation: {
          "hometitle":"A propos de nous, Ikamba Organics",
          "hometext":"IKAMBA LAB est une plateforme pour la vente de composants organiques qui sont faiblement ou non disponible sur le marché. En tant que branche de la société IKAMBA Organics, IKAMBA LAB fournit des composés dans les domaines du photovoltaique organique, du stockage d'énergie et de la chimie fine. Nos produits sont issus du savoir-faire de la société IKAMBA Organics et de ses partenaires.",
          "cartBtnText":"panier",
          "Contact":"Nous Contacter",
          "ContactAdress":"Adresse",
          "Login":"Se Connecter",
          "Register":"S'enregistrer",
          "Account":"Mon Compte",
          "Orders":"Mes Commandes",
          "Logout":"Se Déconnecter",
          "SignUpPage":"S'enregistrer",
          "FirstName":"Prénom",
          "LastName":"Nom",
          "Password":"Mot de passe",
          "PasswordConfirm":"Confirmation mot de passe",
          "AlreadyAcc":"Vous possédez déjà un compte? ",
          "ForgotPass":"Mot de passe oublié?",
          "EnterEmail":"Entrer votre email",
          "ResetPass":"Reinitialisation",
          "NeedAccount":"Pas encore membre?",

       }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
