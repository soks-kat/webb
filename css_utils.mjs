// read file
function extractThemesFromRuleList(rules, themes) {
    for (const rule of rules) {
        // If it's a style rule and its selector includes a class name
        if (rule.type === CSSRule.STYLE_RULE && rule.selectorText && rule.selectorText.includes('.')) {
            const match = rule.selectorText.match(/\.([a-zA-Z0-9_-]+)/);
            if (match) {
                const themeName = match[1];
                // Extract all CSS custom properties from the rule's cssText
                const cssText = rule.cssText;
                const varRegex = /--([a-zA-Z0-9_-]+):\s*([^;]+);/g;
                const colours = {};
                let varMatch;
                while ((varMatch = varRegex.exec(cssText)) !== null) {
                    colours[`--${varMatch[1]}`] = varMatch[2].trim();
                }
                if (Object.keys(colours).length > 0) {
                    themes[themeName] = colours;
                }
            }
        }
        // Handle nested rules (@media, @layer, @supports, etc.)
        if (rule.cssRules) {
            extractThemesFromRuleList(rule.cssRules, themes);
        }
    }
}

export function readCSS() {
    let targetSheet = null;
    for (const sheet of document.styleSheets) {
        if (sheet.href && sheet.href.toLowerCase().includes('colours.css')) {
            targetSheet = sheet;
            break;
        }
    }

    if (!targetSheet) {
        console.warn('colours.css not found');
        return {};
    }

    try {
        const themes = {};
        extractThemesFromRuleList(targetSheet.cssRules, themes);
        console.log('Extracted themes:', Object.keys(themes));
        return themes;
    } catch (e) {
        console.error('Failed to read cssRules:', e);
        return {};
    }

}


// create style
function createStyleElement(id, content) {
    var style = document.createElement("style");
    style.id = id;

    if (style.styleSheet) {
        style.styleSheet.cssText = content;
    } else {
        style.appendChild(document.createTextNode(content));
    }
    return style;
}

// Appends CSS content to the head of the site
export function writeCSS(id, content) {
    var head = document.head || document.getElementById("head")[0];
    console.log(head);
    head.appendChild(createStyleElement(id, content));
}
