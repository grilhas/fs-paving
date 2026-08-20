import { SITE, BUSINESS } from "@data/client";

export function getLocalBusinessSchema(origin) {
	const sameAs = [];
	if (BUSINESS.socials?.facebook) sameAs.push(BUSINESS.socials.facebook);
	if (BUSINESS.socials?.instagram) sameAs.push(BUSINESS.socials.instagram);

	return {
		"@context": "https://schema.org",
		"@type": ["LocalBusiness", "WebSite"],
		"name": BUSINESS.name,
		"url": SITE.url,
		"logo": origin + BUSINESS.logo,
		"image": origin + BUSINESS.logo,
		"email": BUSINESS.email,
		"telephone": BUSINESS.phoneForTel,
		"address": {
			"@type": "PostalAddress",
			"streetAddress": `${BUSINESS.address.lineOne}, ${BUSINESS.address.lineTwo}`,
			"addressLocality": BUSINESS.address.city,
			"addressRegion": BUSINESS.address.state,
			"postalCode": BUSINESS.address.zip,
		},
		"sameAs": sameAs,
		"inLanguage": SITE.locale,
		// Campos acrescentados porque o cliente forneceu estes dados e são sinais
		// que o Google mostra no perfil do negócio: zona servida, línguas faladas,
		// formas de pagamento aceites e horário.
		"areaServed": BUSINESS.serviceArea.map((area) => ({
			"@type": "City",
			"name": area,
		})),
		"availableLanguage": BUSINESS.languages,
		"paymentAccepted": BUSINESS.payments.join(", "),
		"openingHoursSpecification": {
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			],
			"opens": BUSINESS.hours.opens,
			"closes": BUSINESS.hours.closes,
		},
	};
}
