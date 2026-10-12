// Postcard text for each home-page project (keyed by PHOTOS id).
// `results` shows numbers when we have real ones; otherwise `summary` is shown.
export const CARDS: Record<string, { summary: string; results?: [string, string][] }> = {
  p1: { summary: 'CRM for service businesses: clients, tasks and messages in one place.' },
  p2: { summary: 'Everyday payments app, from peer-to-peer transfers to bill pay.' },
  p3: { summary: 'Identity for my own design and development studio.' },
  p4: { summary: 'Pay-to-be-read messaging for people who get too many DMs.' },
  p5: { summary: 'Digital magazine for a temple restoration NGO. V2 approved, in development.' },
  p6: { summary: 'Stable-yield DeFi platform.', results: [['Launch impressions', '1M+'], ['Signups in 48h', '18K'], ['Retainer', '10 mo']] },
  p7: { summary: '9-month social retainer explaining DeFi yield in plain visuals.' },
  p8: { summary: 'One workspace connecting 100+ business tools for freelancers.' },
  p9: { summary: 'DeFi vaults, staking and a stability pool in one product.' },
  p10: { summary: 'Casual card and board games built for India.' },
};
