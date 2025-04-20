# DABubble Design Dokumentation

## Figma Design

Das Design wurde in Figma erstellt und kann hier im Dev Mode eingesehen werden:

```html
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/design/RQ7GVZV8uckyzU3Tg1ilmi/DABubble--Slack-Clone-?node-id=3341-19492&m=dev&t=O8aiRHwQFfM9A9y6-1" allowfullscreen></iframe>
```

## Design Guidelines

1. **Farben**

    - Primärfarbe: #444DF2 ($purple-1)
    - Sekundärfarbe: #535AF1 ($purple-3)
    - Akzentfarbe: #797EF3 ($purple-2)
    - Hintergrundfarbe: #ECEEFE ($bg-color)
    - Textfarbe: #686868 ($text-gray)
    - Online-Status: #92C83E ($online-green)
    - Fehlerfarbe: #ED1E79 ($error)
    - Hover-Farbe: #ebedfcff ($hover-color)
    - Benutzer-Hover: #edefffff ($usersHoverColor)
    - Avatar-Hover: #e6e6e6ff ($avatar-hover-color)

2. **Typografie**

    - Hauptschriftart: Nunito
    - Gewichte:
        - Light: 300
        - Regular: 400
        - Medium: 500
        - SemiBold: 600
        - Bold: 700

3. **Abstände**

    - Mobile Margin: 16px ($mobileMargin)

4. **Breakpoints**

    - Small: 576px ($breakpoint-sm)
    - Medium: 768px ($breakpoint-md)
    - Large: 992px ($breakpoint-lg)
    - Extra Large: 1200px ($breakpoint-xl)

5. **Komponenten**

    - Buttons
    - Input-Felder
    - Karten
    - Modals
    - Navigation

## Mixins

```scss
@mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

@mixin flex-column {
    display: flex;
    flex-direction: column;
}
```

## Assets

-   Fonts: Nunito (Light, Regular, Medium, SemiBold, Bold)
-   Icons: [Link zu Icons]
-   Bilder: [Link zu Bildern]

## Design System

Das Design folgt einem konsistenten System für:

-   Farben
-   Typografie
-   Abstände
-   Komponenten
-   Flexbox-Layouts
