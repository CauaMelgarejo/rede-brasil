"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardList,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WHATSAPP_BUSINESS_PHONE } from "@/lib/whatsapp";
import type {
  OperatorOption,
  OperatorPlan,
  PlanModality,
} from "@/lib/operatorPlans";

const benefits = [
  {
    title: "Orientação para cotação",
    description:
      "Receba informações sobre as modalidades e as regras aplicáveis às opções disponíveis.",
    Icon: ClipboardList,
  },
  {
    title: "Alternativas a consultar",
    description:
      "As possibilidades de contratação e cobertura dependem do produto considerado.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Escolha informada",
    description:
      "Compare as condições apresentadas para avaliar o que faz sentido para você.",
    Icon: BadgeCheck,
  },
];

type PlanFilter = "Todos" | PlanModality;
type QuoteFormValues = {
  fullName: string;
  whatsapp: string;
  email: string;
  city: string;
  cnpjStatus: string;
  peopleCount: string;
  copayPreference: string;
  dentalInterest: string;
  notes: string;
};
type FormField = keyof QuoteFormValues;
type FormErrors = Partial<Record<FormField, string>>;

const fieldClasses =
  "mt-2 w-full rounded-xl border border-[#1A353C]/20 bg-white px-4 py-3 text-sm text-[#1A353C] outline-none transition placeholder:text-[#1A353C]/45 focus:border-[#1A353C] focus:ring-2 focus:ring-[#1A353C]/15";

function createInitialFormValues(): QuoteFormValues {
  return {
    fullName: "",
    whatsapp: "",
    email: "",
    city: "",
    cnpjStatus: "",
    peopleCount: "",
    copayPreference: "",
    dentalInterest: "",
    notes: "",
  };
}

function validateForm(values: QuoteFormValues): FormErrors {
  const errors: FormErrors = {};
  const phoneDigits = values.whatsapp.replace(/\D/g, "");

  if (!values.fullName.trim()) errors.fullName = "Informe seu nome.";
  if (!/^\d{10,11}$/.test(phoneDigits)) {
    errors.whatsapp = "Informe um celular com DDD, com 10 ou 11 dígitos.";
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  return errors;
}

function validateOption(values: QuoteFormValues, minimumLives: number) {
  const errors = validateForm(values);
  if (
    values.peopleCount &&
    (!/^\d+$/.test(values.peopleCount) ||
      Number(values.peopleCount) < minimumLives)
  ) {
    errors.peopleCount = `Informe pelo menos ${minimumLives} ${minimumLives === 1 ? "vida" : "vidas"}.`;
  }
  return errors;
}

function buildWhatsAppMessage(
  operator: OperatorPlan,
  option: OperatorOption,
  values: QuoteFormValues,
) {
  return [
    `Olá! Gostaria de solicitar uma cotação ${operator.name}.`,
    "",
    `Nome: ${values.fullName.trim()}`,
    `Celular: ${values.whatsapp.trim()}`,
    `Modalidade: ${option.modality}`,
    `Opção: alternativa genérica a consultar (${option.modality})`,
    ...(values.email.trim() ? [`E-mail: ${values.email.trim()}`] : []),
    ...(values.city.trim() ? [`Cidade: ${values.city.trim()}`] : []),
    ...(option.modality === "Empresarial" && values.cnpjStatus
      ? [`Situação do CNPJ: ${values.cnpjStatus}`]
      : []),
    ...(values.peopleCount
      ? [`Quantidade de pessoas: ${values.peopleCount}`]
      : []),
    ...(values.copayPreference
      ? [`Coparticipação: ${values.copayPreference}`]
      : []),
    ...(values.dentalInterest
      ? [`Interesse em plano odontológico: ${values.dentalInterest}`]
      : []),
    ...(values.notes.trim() ? [`Observações: ${values.notes.trim()}`] : []),
  ].join("\n");
}

export function OperatorPlanPage({ operator }: { operator: OperatorPlan }) {
  const modalities = operator.options.map((option) => option.modality);
  const filters: PlanFilter[] = ["Todos", ...modalities];
  const [activeFilter, setActiveFilter] = useState<PlanFilter>("Todos");
  const [selectedModality, setSelectedModality] = useState<PlanModality>(
    operator.options[0].modality,
  );
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [values, setValues] = useState(createInitialFormValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formMessage, setFormMessage] = useState("");
  const visibleOptions = operator.options.filter(
    (option) => activeFilter === "Todos" || option.modality === activeFilter,
  );

  function resetForm() {
    setValues(createInitialFormValues());
    setErrors({});
    setFormMessage("");
  }

  function updateField(field: FormField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormMessage("");
  }

  function handleFilterChange(filter: PlanFilter) {
    setActiveFilter(filter);
    setIsFormOpen(false);
    resetForm();

    if (filter !== "Todos") setSelectedModality(filter);
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
    option: OperatorOption,
  ) {
    event.preventDefault();
    const nextErrors = validateOption(values, option.minimumLives);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormMessage("Revise os campos destacados antes de continuar.");
      return;
    }

    const phone = WHATSAPP_BUSINESS_PHONE.replace(/\D/g, "");
    if (!/^\d{10,15}$/.test(phone)) {
      setFormMessage(
        "O WhatsApp comercial precisa ser configurado com DDI e DDD. Seus dados não foram enviados.",
      );
      return;
    }

    const message = encodeURIComponent(
      buildWhatsAppMessage(operator, option, values),
    );
    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
    setFormMessage(
      "A conversa foi aberta no WhatsApp. Revise a mensagem e envie por lá.",
    );
  }

  return (
    <>
      <SiteHeader quoteHref="#opcoes" />
      <main className="min-h-screen bg-[#F5F5F5] text-[#1A353C]">
        <section className="relative isolate overflow-hidden bg-[#1A353C]">
          <div
            className="absolute inset-0 bg-[url('/images/fundo.png')] bg-cover bg-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#10272c]/80" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-360 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="max-w-3xl text-white">
              <div className="mb-8 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4">
                <Image
                  src={operator.logo}
                  alt={operator.name}
                  width={220}
                  height={80}
                  priority
                  className="h-auto max-h-14 w-auto object-contain"
                />
              </div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
                {modalities.join(" · ")}
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Planos {operator.name}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {operator.description}
              </p>
              <a
                href="#opcoes"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-white bg-white px-7 py-4 text-base font-semibold text-[#1A353C] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A353C]"
              >
                Solicitar cotação
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          id="opcoes"
          className="scroll-mt-6 bg-[#E9EEEE] px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-360">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1A353C]/65">
                {operator.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Tipos de planos
              </h2>
              <p className="mt-4 text-base leading-7 text-[#1A353C]/75">
                Consulte as modalidades disponíveis e confirme as condições do
                produto durante a cotação.
              </p>
            </div>

            <div
              className="mt-7 flex flex-wrap gap-3"
              aria-label="Filtrar modalidades"
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleFilterChange(filter)}
                    className={[
                      "rounded-full border px-5 py-2.5 text-sm font-medium transition",
                      isActive
                        ? "border-[#1A353C] bg-[#1A353C] text-white"
                        : "border-[#1A353C]/25 bg-transparent text-[#1A353C] hover:border-[#1A353C]/50",
                    ].join(" ")}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-6">
              {visibleOptions.map((option) => {
                const isSelected = selectedModality === option.modality;
                const isOptionFormOpen = isSelected && isFormOpen;
                const formId = `${operator.slug}-quote-form`;

                return (
                  <article
                    key={option.modality}
                    className="overflow-hidden rounded-3xl border border-[#1A353C]/15 bg-white shadow-[0_14px_40px_rgba(26,53,60,0.07)]"
                  >
                    <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
                      <div>
                        <span className="inline-flex rounded-full bg-[#E9EEEE] px-3 py-1 text-xs font-semibold text-[#1A353C]">
                          Alternativa a consultar · {option.modality}
                        </span>
                        <h3 className="mt-4 text-xl font-semibold sm:text-2xl">
                          Opções de contratação {operator.name}
                        </h3>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-[#1A353C]/75 sm:text-base">
                          Esta é uma alternativa informativa, não um produto
                          comercial cadastrado. As condições variam conforme o
                          produto contratado e devem ser confirmadas na
                          cotação.
                        </p>
                        <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#1A353C]/80 sm:grid-cols-2">
                          <li>
                            Mínimo de {option.minimumLives}{" "}
                            {option.minimumLives === 1 ? "vida" : "vidas"}.
                          </li>
                          {option.facts.map((fact) => (
                            <li key={fact}>{fact}</li>
                          ))}
                        </ul>
                        {option.eligibilityNote && (
                          <p className="mt-3 text-sm font-medium leading-6 text-[#1A353C]/80">
                            {option.eligibilityNote}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        aria-expanded={isOptionFormOpen}
                        aria-controls={isOptionFormOpen ? formId : undefined}
                        onClick={() => {
                          if (!isSelected) {
                            setSelectedModality(option.modality);
                            resetForm();
                          } else {
                            setFormMessage("");
                          }
                          setIsFormOpen((open) => !isSelected || !open);
                        }}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1A353C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#244a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A353C]/40 focus-visible:ring-offset-2"
                      >
                        {isOptionFormOpen
                          ? "Fechar formulário"
                          : "Solicitar cotação"}
                      </button>
                    </div>

                    {isOptionFormOpen && (
                      <form
                        id={formId}
                        onSubmit={(event) => handleSubmit(event, option)}
                        noValidate
                        className="border-t border-[#1A353C]/10 bg-[#F8FAFA] p-6 sm:p-8"
                      >
                        <div className="mb-6 max-w-2xl">
                          <h4 className="text-xl font-semibold">
                            Solicite uma cotação
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-[#1A353C]/70">
                            Nome e celular são obrigatórios. Os demais dados
                            são opcionais.
                          </p>
                        </div>

                        <div className="grid gap-x-5 gap-y-4 md:grid-cols-2">
                          <FormInput
                            id="fullName"
                            label="Nome"
                            required
                            value={values.fullName}
                            error={errors.fullName}
                            onChange={(value) => updateField("fullName", value)}
                            autoComplete="name"
                          />
                          <FormInput
                            id="whatsapp"
                            label="Celular com DDD"
                            required
                            value={values.whatsapp}
                            error={errors.whatsapp}
                            onChange={(value) => updateField("whatsapp", value)}
                            autoComplete="tel"
                            inputMode="tel"
                          />
                          <FormInput
                            id="email"
                            label="E-mail (opcional)"
                            type="email"
                            value={values.email}
                            error={errors.email}
                            onChange={(value) => updateField("email", value)}
                            autoComplete="email"
                          />
                          <FormInput
                            id="city"
                            label="Cidade (opcional)"
                            value={values.city}
                            onChange={(value) => updateField("city", value)}
                            autoComplete="address-level2"
                          />
                          <label
                            htmlFor={`${operator.slug}-modality`}
                            className="block text-sm font-medium"
                          >
                            Modalidade
                            <input
                              id={`${operator.slug}-modality`}
                              readOnly
                              value={option.modality}
                              className={`${fieldClasses} bg-[#F1F4F4]`}
                            />
                          </label>
                          {option.modality === "Empresarial" && (
                            <FormSelect
                              id="cnpjStatus"
                              label="Situação do CNPJ (opcional)"
                              value={values.cnpjStatus}
                              onChange={(value) =>
                                updateField("cnpjStatus", value)
                              }
                              options={[
                                ["", "Selecione uma opção"],
                                ["Tenho CNPJ", "Tenho CNPJ"],
                                ["Não tenho CNPJ", "Não tenho CNPJ"],
                                [
                                  "Preciso de orientação",
                                  "Preciso de orientação",
                                ],
                              ]}
                            />
                          )}
                          <FormInput
                            id="peopleCount"
                            label="Quantidade de pessoas (opcional)"
                            type="number"
                            min={String(option.minimumLives)}
                            step="1"
                            value={values.peopleCount}
                            error={errors.peopleCount}
                            onChange={(value) =>
                              updateField("peopleCount", value)
                            }
                            inputMode="numeric"
                          />
                          <FormSelect
                            id="copayPreference"
                            label="Preferência de coparticipação (opcional)"
                            value={values.copayPreference}
                            onChange={(value) =>
                              updateField("copayPreference", value)
                            }
                            options={[
                              ["", "Selecione uma opção"],
                              ...option.copayChoices.map(
                                (choice): [string, string] => [choice, choice],
                              ),
                            ]}
                          />
                          <FormSelect
                            id="dentalInterest"
                            label="Interesse em plano odontológico (opcional)"
                            value={values.dentalInterest}
                            onChange={(value) =>
                              updateField("dentalInterest", value)
                            }
                            options={[
                              ["", "Selecione uma opção"],
                              ["Tenho interesse", "Tenho interesse"],
                              ["Não tenho interesse", "Não tenho interesse"],
                              [
                                "Quero confirmar a disponibilidade",
                                "Quero confirmar a disponibilidade",
                              ],
                            ]}
                          />
                          <label className="block text-sm font-medium md:col-span-2">
                            Observações{" "}
                            <span className="font-normal text-[#1A353C]/60">
                              (opcional)
                            </span>
                            <textarea
                              rows={4}
                              value={values.notes}
                              onChange={(event) =>
                                updateField("notes", event.target.value)
                              }
                              className={fieldClasses}
                            />
                          </label>
                        </div>

                        <p className="mt-5 max-w-3xl text-xs leading-5 text-[#1A353C]/65">
                          Ao continuar, os dados preenchidos serão incluídos em
                          uma mensagem para o WhatsApp comercial para tratar
                          desta cotação. O site não armazena as respostas.
                          Revise os dados antes de enviar a mensagem pelo
                          WhatsApp.
                        </p>
                        <div className="mt-5 flex flex-col items-start gap-3">
                          <button
                            type="submit"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1A353C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#244a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A353C]/40 focus-visible:ring-offset-2"
                          >
                            Continuar para o WhatsApp
                            <ArrowRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </button>
                          <p
                            aria-live="polite"
                            className="text-sm text-[#1A353C]/80"
                          >
                            {formMessage}
                          </p>
                        </div>
                      </form>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-360">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1A353C]/65">
                Informação e orientação
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Conheça as possibilidades
              </h2>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {benefits.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[#1A353C]/10 bg-white p-6 shadow-[0_10px_25px_rgba(26,53,60,0.04)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9EEEE]">
                    <Icon
                      className="h-6 w-6 text-[#1A353C]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#1A353C]/75">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

type FormInputProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  min?: string;
  step?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "numeric";
  required?: boolean;
  onChange: (value: string) => void;
};

function FormInput({
  id,
  label,
  value,
  error,
  type = "text",
  min,
  step,
  autoComplete,
  inputMode,
  required = false,
  onChange,
}: FormInputProps) {
  return (
    <label htmlFor={id} className="block text-sm font-medium">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        min={min}
        step={step}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`${fieldClasses} ${error ? "border-red-700 focus:border-red-700 focus:ring-red-700/15" : ""}`}
      />
      {error && (
        <span id={`${id}-error`} className="mt-1 block text-xs text-red-800">
          {error}
        </span>
      )}
    </label>
  );
}

type FormSelectProps = {
  id: string;
  label: string;
  value: string;
  options: [string, string][];
  onChange: (value: string) => void;
};

function FormSelect({ id, label, value, options, onChange }: FormSelectProps) {
  return (
    <label htmlFor={id} className="block text-sm font-medium">
      {label}
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClasses}
      >
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue || "placeholder"} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
