
// COST OF LIVING CHARTS: http://www.payscale.com/cost-of-living-calculator
var url = '//payscale.com/syndication/calculator_large.aspx?jobTitle=web%20developer&city=San%20Francisco&state=CA&country=US';


PayScaleExtension.ServiceURL = '//www.payscale.com';
PayScaleExtension.baseFrameLoc =
PayScaleExtension.ServiceURL + "/syndication/calculator_large.aspx?jobTitle=" + PayScaleExtension.processedJob + "&city=" + PayScaleExtension.processedCity + "&state=" + PayScaleExtension.processedState
+ "&country=" + PayScaleExtension.processedCountry + "&af=" + PayScaleExtension.affiliateId + "&src=" + PayScaleExtension.srcId + "&t=" + new Date().getTime() + "&cmPageId=" + PayScaleExtension.cmPageId;

PayScaleExtension.processedJob = encodeURIComponent(job);
PayScaleExtension.processedCity = encodeURIComponent(city);
PayScaleExtension.processedState = encodeURIComponent(state);
PayScaleExtension.processedCountry = encodeURIComponent(country);

PayScaleExtension.cmPageId = encodeURIComponent(PayScaleExtension.cmPageId);
PayScaleExtension.srcId = PayScaleExtension.affiliateId + "wizbub";

PayScaleExtension.baseFrameLoc = PayScaleExtension.ServiceURL + "/syndication/market_rate_calculator.aspx?jobTitle=" + PayScaleExtension.processedJob
                                    + "&city=" + PayScaleExtension.processedCity
                                    + "&state=" + PayScaleExtension.processedState
                                    + "&country=" + PayScaleExtension.processedCountry
                                    + "&af=" + PayScaleExtension.affiliateId
                                    + "&cmpid=" + PayScaleExtension.campaignId
                                    + "&chartbg=" + chartBgColor.replace('#', '')
                                    + "&chartfg=" + chartFgColor.replace('#', '')
                                    + "&src=" + PayScaleExtension.srcId
                                    + "&t=" + new Date().getTime()
                                    + "&cmPageId=" + PayScaleExtension.cmPageId;

if (PayScaleExtension.jobListing) {
    PayScaleExtension.baseFrameLoc = PayScaleExtension.baseFrameLoc + "&joblistings=true";
}