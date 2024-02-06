(() => {
    'use strict';
    var t,
        e,
        n,
        o,
        i,
        r,
        a,
        l = {
            408: (t, e) => {
                Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.CSS = void 0),
                    (e.CSS =
                        '\n\n    /* for development  */\n    body {\n        background-color:black;\n    }\n\n    #GGUI-Container {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background-color: #3e3e3e;\n        display: flex;\n        flex-direction: column;\n        /* no padding on top/bottom (keep room for title/footer) */\n        padding: 0 25px 0px 25px;\n        border: solid #262626 4px;\n    }\n    \n    #GGUI-Folder-Container {\n        display: flex;\n        overflow: auto;\n    }\n\n    /* Title */\n    #GGUI-Title {\n        display: flex;\n        justify-content: center;\n        color: white;\n        padding-top: 12px;\n        padding-bottom: 12px;\n    }\n    \n    /* Footer */\n    #GGUI-footer {\n        display: flex;\n        justify-content: center;\n        color: #b89749;\n        padding-top: 6px;\n        padding-bottom: 6px;\n    }   \n\n    /* Folders */\n    .GGUI-Folder {\n        min-width: fit-content;\n        background-color: #2e2e2e;\n        color: white;\n        padding: 5px;\n        margin-left: 10px;\n        margin-right: 10px;\n        overflow-y: auto;\n\n    }\n\n    .GGUI-Folder-Title {\n        display: flex;\n        justify-content: center;\n        color: white;\n        padding-top: 3px;\n        padding-bottom: 3px;\n    }\n\n    /* Prevent margin against the container */\n    .GGUI-Folder:first-child {\n        margin-left: 0px;\n    }\n    .GGUI-Folder:last-child {\n        margin-left: 0px;\n    }\n\n    /* Row :: Folder child */\n    .GGUI-Row {\n        display: flex;\n        margin-top: 10px;\n        margin-bottom: 10px;\n    }\n\n    /* Prevent margin against top/bottom of folder */\n    .GGUI-Row:first-child {\n        margin-top: 0px;\n    }\n    .GGUI-Row:last-child {\n        margin-bottom: 0px;\n    }\n\n    /* FileUpload */\n    .GGUI-FileUpload {\n        /* color: transparent; */\n    }\n');
            },
            201: (t, e) => {
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.Folder = void 0);
                var n = (function () {
                    function t(t) {
                        (this.components = []), (this.name = t.name);
                    }
                    return (
                        (t.prototype.addComponent = function (t) {
                            this.components.push(t);
                        }),
                        (t.prototype._renderTo = function (t) {
                            var e = document.createElement('div');
                            e.classList.add('GGUI-Folder');
                            var n = document.createElement('div');
                            (n.innerText = this.name), n.classList.add('GGUI-Folder-Title'), e.appendChild(n);
                            for (var o = 0; o < this.components.length; o++) this.components[o]._renderTo(e);
                            t.appendChild(e);
                        }),
                        t
                    );
                })();
                e.Folder = n;
            },
            40: function (t, e, n) {
                var o =
                    (this && this.__assign) ||
                    function () {
                        return (
                            (o =
                                Object.assign ||
                                function (t) {
                                    for (var e, n = 1, o = arguments.length; n < o; n++)
                                        for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                                    return t;
                                }),
                            o.apply(this, arguments)
                        );
                    };
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.GUI = void 0);
                var i = n(408),
                    r = (function () {
                        function t(t) {
                            (this.visible = !1),
                                (this.folders = []),
                                (this.locked = !1),
                                (this.sourceID = 'GGUI-Container'),
                                (this.options = o(o({}, { title: 'GGUI', width: 700, height: 450, show: !0, key: 'Escape' }), t));
                        }
                        return (
                            (t.prototype.addFolder = function (t) {
                                this.folders.push(t);
                            }),
                            (t.prototype.display = function (t) {
                                (this.visible = t), (document.getElementById(this.sourceID).style.display = t ? 'flex' : 'none');
                            }),
                            (t.prototype._createTitle = function () {
                                var t = document.createElement('div');
                                return (t.id = 'GGUI-Title'), (t.innerText = this.options.title), t;
                            }),
                            (t.prototype._createFooter = function () {
                                var t = document.createElement('div');
                                return (t.id = 'GGUI-footer'), (t.innerText = 'GGui.js'), t;
                            }),
                            (t.prototype.init = function () {
                                var t = this;
                                if (this.locked) throw new Error('Gui has already been initialized');
                                this.locked = !0;
                                var e = document.createElement('style');
                                (e.innerHTML = i.CSS), document.head.appendChild(e);
                                var n = document.createElement('div');
                                (n.id = this.sourceID),
                                    (n.style.width = ''.concat(this.options.width, 'px')),
                                    (n.style.height = ''.concat(this.options.height, 'px'));
                                var o = document.createElement('div');
                                o.id = 'GGUI-Folder-Container';
                                for (var r = 0; r < this.folders.length; r++) this.folders[r]._renderTo(o);
                                n.appendChild(this._createTitle()),
                                    n.appendChild(o),
                                    n.appendChild(this._createFooter()),
                                    document.body.appendChild(n),
                                    this.options.show && this.display(!0),
                                    document.addEventListener('keydown', function (e) {
                                        e.key === t.options.key && t.display(!t.visible);
                                    });
                            }),
                            t
                        );
                    })();
                e.GUI = r;
            },
            579: function (t, e, n) {
                var o,
                    i =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (
                                (o =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    }),
                                o(t, e)
                            );
                        }),
                        function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.Button = void 0);
                var r = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.options = e), n;
                    }
                    return (
                        i(e, t),
                        (e.prototype._renderTo = function (t) {
                            var e = this,
                                n = document.createElement('div');
                            n.classList.add('GGUI-Row');
                            var o = document.createElement('div');
                            (o.innerText = this.title), (o.style.marginRight = 'auto');
                            var i = document.createElement('button');
                            (i.innerText = this.options.label || ''),
                                i.classList.add('GGUI-Button'),
                                i.addEventListener('click', function () {
                                    e.options.onClick();
                                }),
                                n.appendChild(o),
                                n.appendChild(i),
                                t.appendChild(n);
                        }),
                        e
                    );
                })(n(122).Component);
                e.Button = r;
            },
            304: function (t, e, n) {
                var o,
                    i =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (
                                (o =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    }),
                                o(t, e)
                            );
                        }),
                        function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.CheckBox = void 0);
                var r = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.options = e), n;
                    }
                    return (
                        i(e, t),
                        (e.prototype._renderTo = function (t) {
                            var e = this,
                                n = document.createElement('div');
                            n.classList.add('GGUI-Row');
                            var o = document.createElement('div');
                            (o.innerText = this.title), (o.style.marginRight = 'auto');
                            var i = document.createElement('input');
                            i.classList.add('GGUI-CheckBox'),
                                (i.type = 'checkbox'),
                                i.addEventListener('change', function (t) {
                                    e.options.onChange(i.checked);
                                }),
                                n.appendChild(o),
                                n.appendChild(i),
                                t.appendChild(n);
                        }),
                        e
                    );
                })(n(122).Component);
                e.CheckBox = r;
            },
            170: function (t, e, n) {
                var o,
                    i =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (
                                (o =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    }),
                                o(t, e)
                            );
                        }),
                        function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.ColorWheel = void 0);
                var r = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.options = e), n;
                    }
                    return (
                        i(e, t),
                        (e.prototype._renderTo = function (t) {
                            var e = this,
                                n = document.createElement('div');
                            n.classList.add('GGUI-Row');
                            var o = document.createElement('div');
                            (o.innerText = this.title), (o.style.marginRight = 'auto');
                            var i = document.createElement('input');
                            i.classList.add('GGUI-ColorWheel'),
                                (i.type = 'color'),
                                i.addEventListener('change', function (t) {
                                    e.options.onChange(t.target.value);
                                }),
                                n.appendChild(o),
                                n.appendChild(i),
                                t.appendChild(n);
                        }),
                        e
                    );
                })(n(122).Component);
                e.ColorWheel = r;
            },
            122: (t, e) => {
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.Component = void 0);
                e.Component = function (t) {
                    this.title = t.title;
                };
            },
            32: function (t, e, n) {
                var o,
                    i =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (
                                (o =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    }),
                                o(t, e)
                            );
                        }),
                        function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.FileUpload = void 0);
                var r = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.options = e), n;
                    }
                    return (
                        i(e, t),
                        (e.prototype._renderTo = function (t) {
                            var e = this,
                                n = document.createElement('div');
                            n.classList.add('GGUI-Row');
                            var o = document.createElement('div');
                            (o.innerText = this.title), (o.style.marginRight = 'auto');
                            var i = document.createElement('input');
                            i.classList.add('GGUI-FileUpload'),
                                (i.type = 'file'),
                                (i.multiple = this.options.multiple),
                                i.addEventListener('change', function (t) {
                                    var n = t.target;
                                    n.files && e.options.onUpload(n.files);
                                }),
                                n.appendChild(o),
                                n.appendChild(i),
                                t.appendChild(n);
                        }),
                        e
                    );
                })(n(122).Component);
                e.FileUpload = r;
            },
            474: function (t, e, n) {
                var o,
                    i =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (
                                (o =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    }),
                                o(t, e)
                            );
                        }),
                        function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(e, '__esModule', { value: !0 }), (e.RangeSlider = void 0);
                var r = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.options = e), n;
                    }
                    return (
                        i(e, t),
                        (e.prototype._renderTo = function (t) {
                            var e = this,
                                n = document.createElement('div');
                            n.classList.add('GGUI-Row');
                            var o = document.createElement('div');
                            (o.innerText = this.title), (o.style.marginRight = 'auto');
                            var i = document.createElement('input');
                            i.classList.add('GGUI-RangeSlider'),
                                (i.type = 'range'),
                                (i.min = this.options.min + ''),
                                (i.max = this.options.max + ''),
                                (i.value = this.options.value + ''),
                                (i.step = this.options.step + ''),
                                i.addEventListener('input', function (t) {
                                    var n = t.target.valueAsNumber;
                                    (t.target.nextSibling.value = ''.concat(n)), e.options.onChange(n);
                                });
                            var r = document.createElement('input');
                            r.classList.add('GGUI-RangeSlider-TextValue'),
                                (r.type = 'number'),
                                (r.max = ''.concat(this.options.max)),
                                (r.min = ''.concat(this.options.min)),
                                (r.value = ''.concat(this.options.value)),
                                (r.step = ''.concat(this.options.step)),
                                r.addEventListener('input', function (t) {
                                    var n = t.target.valueAsNumber;
                                    (t.target.previousSibling.value = ''.concat(n)), e.options.onChange(n);
                                }),
                                n.appendChild(o),
                                n.appendChild(i),
                                n.appendChild(r),
                                t.appendChild(n);
                        }),
                        e
                    );
                })(n(122).Component);
                e.RangeSlider = r;
            },
        },
        s = {};
    function p(t) {
        var e = s[t];
        if (void 0 !== e) return e.exports;
        var n = (s[t] = { exports: {} });
        return l[t].call(n.exports, n, n.exports, p), n.exports;
    }
    (t = p(40)),
        (e = p(201)),
        (n = p(579)),
        (o = p(304)),
        (i = p(474)),
        (r = p(170)),
        (a = p(32)),
        'undefined' != typeof window &&
            (window.GGUI = {
                GUI: t.GUI,
                Folder: e.Folder,
                Button: n.Button,
                CheckBox: o.CheckBox,
                RangeSlider: i.RangeSlider,
                ColorWheel: r.ColorWheel,
                FileUpload: a.FileUpload,
            }),
        t.GUI,
        e.Folder,
        n.Button,
        o.CheckBox,
        i.RangeSlider,
        r.ColorWheel,
        a.FileUpload;
})();
