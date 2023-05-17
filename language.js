function changeLanguage(language) {
    // Set the language attribute on the <html> or <body> element
    document.documentElement.lang = language;

    // Add or remove classes from the <body> element if necessary
    document.body.className = language;

    // Additional language-specific updates can be performed here
}