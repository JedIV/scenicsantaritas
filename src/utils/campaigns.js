export function getActiveCampaign(campaigns) {
  if (!Array.isArray(campaigns)) {
    return null;
  }

  const now = new Date();

  return (
    campaigns.find((campaign) => {
      if (!campaign || campaign.status !== 'active') {
        return false;
      }

      const start = campaign.start_date ? new Date(campaign.start_date) : null;
      const end = campaign.end_date ? new Date(campaign.end_date) : null;

      if (start && now < start) {
        return false;
      }

      if (end && now > end) {
        return false;
      }

      return true;
    }) || null
  );
}
