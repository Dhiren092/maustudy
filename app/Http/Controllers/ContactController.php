<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function send(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:100',
            'last_name'  => 'required|string|max:100',
            'email'      => 'required|email|max:255',
            'message'    => 'required|string|max:5000',
        ]);

        // TODO: configure MAIL_* in .env and wire a Mailable if needed
        // Mail::to(config('mail.from.address'))->send(new \App\Mail\ContactMail($validated));

        return redirect()->route('home')->with('success', 'Your message has been sent. We\'ll be in touch soon!');
    }
}
