import { Link } from "react-router-dom";
import logo from "@/assets/lololo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Mundo Exato Digital" className="h-8 w-8" />
              <span className="font-bold text-primary">Mundo Exato Digital</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plataforma educacional interativa para o ensino de Física.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/explore" className="hover:text-foreground transition-colors">Conteúdos</Link></li>
              <li><Link to="/explore" className="hover:text-foreground transition-colors">Simulações</Link></li>
              <li><Link to="/explore" className="hover:text-foreground transition-colors">Quizzes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Sobre</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contato</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>mundoxatodigital@gmail.com</li>
              <li>(11) 98273-9218</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6 items-center animate-fade-in" style={{ animationDelay: '120ms' }}>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Mundo Exato Digital. Todos os direitos reservados.</p>
            <p>Feito pela empresa Interativo Cerqueira.</p>
          </div>

          <div className="md:col-span-2">
            <Newsletter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = (value: string) => {
    // simple email regex
    return /.+@.+\..+/.test(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(email)) {
      setError("Por favor insira um e-mail válido.");
      return;
    }
    setError("");
    // placeholder: aqui você integraria com um serviço real
    try {
      // simulate success
      // eslint-disable-next-line no-alert
      alert(`Inscrito: ${email}`);
      setEmail("");
    } catch (err) {
      setError("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row items-center gap-3 justify-end">
      <label htmlFor="newsletter-email" className="sr-only">E-mail para newsletter</label>
      <Input
        id="newsletter-email"
        className="w-full sm:w-auto"
        placeholder="Seu e-mail para receber novidades"
        type="email"
        value={email}
        aria-invalid={!!error}
        aria-describedby={error ? "newsletter-error" : undefined}
        onChange={(ev) => setEmail(ev.target.value)}
        required
      />
      <Button size="sm" className="btn-glow" aria-label="Inscrever-se na newsletter">
        <button type="submit">Inscrever-se</button>
      </Button>
      {error ? <div id="newsletter-error" className="text-sm text-destructive mt-2 sm:mt-0">{error}</div> : null}
    </form>
  );
}
