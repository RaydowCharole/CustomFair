GLOBAL['#FairKey#'] = (function (__initProps__) {
    const __global__ = this;

    function DemoList() {
        const inner = DemoList.__inner__;
        if (this == __global__) {
            return new DemoList({__args__: arguments});
        } else {
            const args = arguments.length > 0 ? arguments[0].__args__ || arguments : [];
            inner.apply(this, args);
            DemoList.prototype.ctor.apply(this, args);
            return this;
        }
    }

    DemoList.__inner__ = function inner() {
        Object.__inner__.call(this);
        this.list = null;
        this.total = null;
    };
    DemoList.prototype = {
        ctor: function ctor({list, total} = {}) {
            const __thiz__ = this;
            const __arg_ctx__ = {list, total,};
            with (__thiz__) {
                with (__arg_ctx__) {
                    Object.prototype.ctor.call(__thiz__);
                    this.list = list;
                    this.total = total;
                }
            }
        }, toJson: function () {
            let res = {};
            res.list = this.list;
            res.total = this.total;
            return JSON.stringify(res);
        },
    };
    DemoList.fromJson = function (json) {
        if (typeof json == 'string') {
            json = JSON.parse(json);
        }
        var res = new DemoList();
        res.list = json.list;
        res.total = json.total;
        return res;
    };
    inherit(DemoList, Object);

    function DemoItem() {
        const inner = DemoItem.__inner__;
        if (this == __global__) {
            return new DemoItem({__args__: arguments});
        } else {
            const args = arguments.length > 0 ? arguments[0].__args__ || arguments : [];
            inner.apply(this, args);
            DemoItem.prototype.ctor.apply(this, args);
            return this;
        }
    }

    DemoItem.__inner__ = function inner() {
        Object.__inner__.call(this);
        this.id = null;
        this.name = '';
        this.type = '';
    };
    DemoItem.prototype = {
        ctor: function ctor({id, name, type} = {}) {
            const __thiz__ = this;
            const __arg_ctx__ = {id, name, type,};
            with (__thiz__) {
                with (__arg_ctx__) {
                    Object.prototype.ctor.call(__thiz__);
                    this.id = id;
                    this.name = name;
                    this.type = type;
                }
            }
        }, toJson: function () {
            let res = {};
            res.id = this.id;
            res.name = this.name;
            res.type = this.type;
            return JSON.stringify(res);
        },
    };
    DemoItem.fromJson = function (json) {
        if (typeof json == 'string') {
            json = JSON.parse(json);
        }
        var res = new DemoItem();
        res.id = json.id;
        res.name = json.name;
        res.type = json.type;
        return res;
    };
    inherit(DemoItem, Object);

    function _State() {
        const inner = _State.__inner__;
        if (this == __global__) {
            return new _State({__args__: arguments});
        } else {
            const args = arguments.length > 0 ? arguments[0].__args__ || arguments : [];
            inner.apply(this, args);
            _State.prototype.ctor.apply(this, args);
            return this;
        }
    }

    _State.__inner__ = function inner() {
        this.fairProps = __initProps__;
        this._demoList = DemoList({list: List.empty(), total: 0});
    };
    _State.prototype = {
        getTitle: function getTitle() {
            const __thiz__ = this;
            with (__thiz__) {
                return fairProps.__op_idx__('pageName');
            }
        }, onTapText: function onTapText() {
            const __thiz__ = this;
            with (__thiz__) {
                _demoList.total = _demoList.total + 1;
                setState('#FairKey#', function dummy() {
                });
            }
        }, initState: function initState() {
            const __thiz__ = this;
            with (__thiz__) {
                fairProps = widget.fairProps;
            }
        },
    };
    _State.prototype.ctor = function () {
        Object.prototype.ctor.call(this);
    };
    ;
    return _State();
})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));
