import axios from 'axios'
import { useState } from 'react'
import Alert from '../../components/Alert'
import { ScrollRestoration } from 'react-router-dom'
import {
    Field,
    Fieldset,
    Input,
    Label,
    Select,
    Textarea,
} from '@headlessui/react'

import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        criteriaMode: 'all',
    })
    const [open, setOpen] = useState(false)
    const [alertInfo, setAlertInfo] = useState({
        title: '',
        message: '',
        icon: '',
    })
    const [loading, setLoading] = useState(false)
    const [captchaToken, setCaptchaToken] = useState('')

    const onSubmit = (data) => {
        setLoading(true)
        axios
            .post(`${process.env.REACT_APP_AXIOS_API_URL}/api/mail/send`, {
                ...data,
                captchaToken,
            })
            .then((response) => {
                setLoading(false)
                reset()
                setAlertInfo({
                    title: 'Message envoyé',
                    message: 'Votre message a été envoyé avec succès!',
                    type: 'success',
                })
                setOpen(true)
            })
            .catch((error) => {
                setLoading(false)
                setAlertInfo({
                    title: 'Erreur',
                    message:
                        "Une erreur est survenue lors de l'envoi du message.",
                    type: 'error',
                })
                setOpen(true)
            })
    }
    return (
        <>
            <Alert
                open={open}
                setOpen={setOpen}
                title={alertInfo.title}
                message={alertInfo.message}
                type={alertInfo.type}
            />
            <main className="mb-16 grid h-full place-items-center px-8 py-12 lg:px-8">
                <div className="flex h-full flex-col items-center justify-center">
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Contactez-nous
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Vous avez une question ou un projet en tête ?
                        Contactez-nous dès maintenant.
                    </p>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-10 w-full text-[#171716]"
                    >
                        <Fieldset>
                            <Field className="flex flex-col justify-between gap-x-10 sm:flex-row">
                                <Field className="w-full">
                                    <Label className="mt-6 block text-sm font-semibold text-gray-900">
                                        Nom :
                                    </Label>
                                    <Input
                                        className="mt-2 w-full rounded-md border border-gray-400 bg-[#E4E2DD] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 "
                                        name="lastname"
                                        {...register('lastname', {
                                            required: 'Ce champ est requis.',
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])[A-Za-z\s]+$/i,
                                                message:
                                                    'Ce champ doit contenir uniquement des lettres.',
                                            },
                                            maxLength: {
                                                value: 20,
                                                message:
                                                    'Ce champ doit contenir moins de 20 caractères.',
                                            },
                                        })}
                                        type="text"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="lastname"
                                        render={({ messages }) => {
                                            console.log('messages', messages)
                                            return messages
                                                ? Object.entries(messages).map(
                                                      ([type, message]) => (
                                                          <p
                                                              key={type}
                                                              className="p-1 text-red-700"
                                                          >
                                                              <i class="bi bi-exclamation-triangle mr-2"></i>
                                                              {message}
                                                          </p>
                                                      )
                                                  )
                                                : null
                                        }}
                                    />
                                </Field>
                                <Field className="w-full">
                                    <Label className="mt-6 block text-sm font-semibold text-gray-900">
                                        Prénom :
                                    </Label>
                                    <Input
                                        className="mt-2 w-full rounded-md border border-gray-400 bg-[#E4E2DD] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        name="firstname"
                                        {...register('firstname', {
                                            required: 'Ce champ est requis.',
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])[A-Za-z\s]+$/i,
                                                message:
                                                    'Ce champ doit contenir uniquement des lettres.',
                                            },
                                            maxLength: {
                                                value: 20,
                                                message:
                                                    'Ce champ doit contenir moins de 20 caractères.',
                                            },
                                        })}
                                        type="text"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="firstname"
                                        render={({ messages }) => {
                                            console.log('messages', messages)
                                            return messages
                                                ? Object.entries(messages).map(
                                                      ([type, message]) => (
                                                          <p
                                                              key={type}
                                                              className="p-1 text-red-700"
                                                          >
                                                              <i class="bi bi-exclamation-triangle mr-2"></i>
                                                              {message}
                                                          </p>
                                                      )
                                                  )
                                                : null
                                        }}
                                    />
                                </Field>
                            </Field>
                            <Field>
                                <Label className="mt-6 block text-sm font-semibold text-gray-900">
                                    Adresse e-mail :
                                </Label>
                                <Input
                                    name="email"
                                    type="email"
                                    className="mt-2 w-full rounded-md border border-gray-400 bg-[#E4E2DD] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    {...register('email', {
                                        required: 'Ce champ est requis.',
                                        pattern: {
                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                            message:
                                                'Veuillez entrer une adresse e-mail valide.',
                                        },
                                    })}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="email"
                                    render={({ messages }) => {
                                        console.log('messages', messages)
                                        return messages
                                            ? Object.entries(messages).map(
                                                  ([type, message]) => (
                                                      <p
                                                          key={type}
                                                          className="p-1 text-red-700"
                                                      >
                                                          <i class="bi bi-exclamation-triangle mr-2"></i>
                                                          {message}
                                                      </p>
                                                  )
                                              )
                                            : null
                                    }}
                                />
                            </Field>
                            <Field>
                                <Label className="mt-6 block text-sm font-semibold text-gray-900">
                                    Téléphone :
                                </Label>
                                <Input
                                    name="phone"
                                    type="tel"
                                    className="mt-2 w-full rounded-md border border-gray-400 bg-[#E4E2DD] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    {...register('phone', {
                                        required: 'Ce champ est requis.',
                                        pattern: {
                                            value: /^[0-9]{10}$/i,
                                            message:
                                                'Veuillez entrer un numéro de téléphone valide.',
                                        },
                                    })}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="phone"
                                    render={({ messages }) => {
                                        console.log('messages', messages)
                                        return messages
                                            ? Object.entries(messages).map(
                                                  ([type, message]) => (
                                                      <p
                                                          key={type}
                                                          className="p-1 text-red-700"
                                                      >
                                                          <i class="bi bi-exclamation-triangle mr-2"></i>
                                                          {message}
                                                      </p>
                                                  )
                                              )
                                            : null
                                    }}
                                />
                            </Field>
                            <Field>
                                <Label className="mt-6 block text-sm font-semibold text-gray-900">
                                    Sujet :
                                </Label>
                                <Select
                                    name="project"
                                    className="mt-2 w-full rounded-md border border-gray-400 bg-[#E4E2DD] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    {...register('project', {
                                        required: 'Ce champ est requis.',
                                    })}
                                >
                                    <option disabled selected>
                                        -- Choisissez un sujet --
                                    </option>
                                    <option value="Site web de présentation">
                                        Site web de présentation
                                    </option>
                                    <option value="Application web interactive">
                                        Application web interactive
                                    </option>
                                    <option value="Site e-commerce">
                                        Site e-commerce
                                    </option>
                                    <option value="Application mobile">
                                        Application mobile
                                    </option>
                                    <option value="Autre">Autre</option>
                                </Select>
                                <ErrorMessage
                                    errors={errors}
                                    name="project"
                                    render={({ messages }) => {
                                        console.log('messages', messages)
                                        return messages
                                            ? Object.entries(messages).map(
                                                  ([type, message]) => (
                                                      <p
                                                          key={type}
                                                          className="p-1 text-red-700"
                                                      >
                                                          <i class="bi bi-exclamation-triangle mr-2"></i>
                                                          {message}
                                                      </p>
                                                  )
                                              )
                                            : null
                                    }}
                                />
                            </Field>
                            <Field>
                                <Label className="mt-6 block text-sm font-semibold text-gray-900">
                                    Message :
                                </Label>
                                <Textarea
                                    name="message"
                                    className="mt-2 w-full resize-none rounded-md border border-gray-400 bg-[#E4E2DD] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    rows={4}
                                    {...register('message', {
                                        required: 'Ce champ est requis.',
                                        minLength: {
                                            value: 10,
                                            message:
                                                'Ce champ doit contenir au moins 10 caractères.',
                                        },
                                        maxLength: {
                                            value: 500,
                                            message:
                                                'Ce champ doit contenir moins de 500 caractères.',
                                        },
                                    })}
                                ></Textarea>
                                <ErrorMessage
                                    errors={errors}
                                    name="message"
                                    render={({ messages }) => {
                                        console.log('messages', messages)
                                        return messages
                                            ? Object.entries(messages).map(
                                                  ([type, message]) => (
                                                      <p
                                                          key={type}
                                                          className="p-1 text-red-700"
                                                      >
                                                          <i class="bi bi-exclamation-triangle mr-2"></i>
                                                          {message}
                                                      </p>
                                                  )
                                              )
                                            : null
                                    }}
                                />
                            </Field>
                            <Field>
                                <ReCAPTCHA
                                    className="mt-3"
                                    sitekey={
                                        process.env.REACT_APP_RECAPTCHA_SITE_KEY
                                    }
                                    onChange={(value) => setCaptchaToken(value)}
                                />
                            </Field>
                            <Field>
                                <button
                                    type="submit"
                                    className="mt-6 flex w-full items-center justify-center rounded-md bg-black px-4 py-2 font-semibold  text-[#E4E2DD] shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                >
                                    {loading && (
                                        <svg
                                            class="-ml-1 mr-3 h-5 w-5 animate-spin "
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                class="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                stroke-width="4"
                                            ></circle>
                                            <path
                                                class="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    )}
                                    Envoyer
                                </button>
                            </Field>
                        </Fieldset>
                    </form>
                </div>
            </main>
            <ScrollRestoration />
        </>
    )
}
