import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FadeInDirective } from '../../directives/fade-in';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FadeInDirective, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  sending = signal(false);
  sent = signal(false);
  error = signal(false);

  async sendEmail(): Promise<void> {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.sending.set(true);
    this.error.set(false);

    try {
      await emailjs.send(
        'service_u270kup',
        'template_l6hv9cm',
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          message: this.formData.message,
        },
        'JBzKIvr-jnLwZdqii'
      );

      this.sent.set(true);
      this.formData = { name: '', email: '', message: '' };
    } catch {
      this.error.set(true);
    } finally {
      this.sending.set(false);
    }
  }
}
