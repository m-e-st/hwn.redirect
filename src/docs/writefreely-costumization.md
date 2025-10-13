# WriteFreely at tchncs

## Custom CSS

```css
body {
    background-color: silver;
    background-image:linear-gradient(to right, silver, white 10%, white 90%, silver);
}

.footer {
    display:block;
    padding:4px 8px; 
    text-align: center; 
    background:dimgray;color:white;
}

body > footer > hr { display:none; }
body > footer > nav { 
    margin:0 -32px 0 -32px; 
    width:110%; 
    width:calc(100% + 64px);
    padding: 8px 0;
    background:silver;color:gray;
    background-image:linear-gradient(to right, silver, white 10%, silver 50%, white 90%, silver);
}
body > footer > nav > a { color: navy!important; font-weight:700}
body > footer > nav > a:hover { color: blue; }
```

## Post Signature
```html
<small class="footer">Michael Stumpp Oranienburg -- Lizenz <b>CC BY-SA</b></small>
```
