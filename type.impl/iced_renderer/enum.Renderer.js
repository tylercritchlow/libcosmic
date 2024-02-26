(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#50\">source</a><a href=\"#impl-Renderer\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.draw_mesh\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#51\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced_renderer/enum.Renderer.html#tymethod.draw_mesh\" class=\"fn\">draw_mesh</a>(&amp;mut self, mesh: <a class=\"enum\" href=\"iced_graphics/mesh/enum.Mesh.html\" title=\"enum iced_graphics::mesh::Mesh\">Mesh</a>)</h4></section></div></details>",0,"cosmic::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#148\">source</a><a href=\"#impl-Renderer-for-Renderer\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Font\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Font\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_core/text/trait.Renderer.html#associatedtype.Font\" class=\"associatedtype\">Font</a> = <a class=\"struct\" href=\"cosmic/font/struct.Font.html\" title=\"struct cosmic::font::Font\">Font</a></h4></section></summary><div class='docblock'>The font type used.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Paragraph\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Paragraph\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_core/text/trait.Renderer.html#associatedtype.Paragraph\" class=\"associatedtype\">Paragraph</a> = <a class=\"struct\" href=\"iced_graphics/text/paragraph/struct.Paragraph.html\" title=\"struct iced_graphics::text::paragraph::Paragraph\">Paragraph</a></h4></section></summary><div class='docblock'>The <a href=\"iced_core/text/paragraph/trait.Paragraph.html\" title=\"trait iced_core::text::paragraph::Paragraph\"><code>Paragraph</code></a> of this <a href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\"><code>Renderer</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Editor\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Editor\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_core/text/trait.Renderer.html#associatedtype.Editor\" class=\"associatedtype\">Editor</a> = <a class=\"struct\" href=\"iced_graphics/text/editor/struct.Editor.html\" title=\"struct iced_graphics::text::editor::Editor\">Editor</a></h4></section></summary><div class='docblock'>The <a href=\"iced_core/text/editor/trait.Editor.html\" title=\"trait iced_core::text::editor::Editor\"><code>Editor</code></a> of this <a href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\"><code>Renderer</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Raw\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Raw\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_core/text/trait.Renderer.html#associatedtype.Raw\" class=\"associatedtype\">Raw</a> = <a class=\"struct\" href=\"iced_graphics/text/struct.Raw.html\" title=\"struct iced_graphics::text::Raw\">Raw</a></h4></section></summary><div class='docblock'>The Raw of this <a href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\"><code>Renderer</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ICON_FONT\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#154\">source</a><a href=\"#associatedconstant.ICON_FONT\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"iced_core/text/trait.Renderer.html#associatedconstant.ICON_FONT\" class=\"constant\">ICON_FONT</a>: <a class=\"struct\" href=\"cosmic/font/struct.Font.html\" title=\"struct cosmic::font::Font\">Font</a> = iced_tiny_skia::Renderer::ICON_FONT</h4></section></summary><div class='docblock'>The icon font of the backend.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.CHECKMARK_ICON\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#155\">source</a><a href=\"#associatedconstant.CHECKMARK_ICON\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"iced_core/text/trait.Renderer.html#associatedconstant.CHECKMARK_ICON\" class=\"constant\">CHECKMARK_ICON</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.char.html\">char</a> = &#39;\\u{f00c}&#39;</h4></section></summary><div class='docblock'>The <code>char</code> representing a ✔ icon in the <a href=\"iced_core/text/trait.Renderer.html#associatedconstant.ICON_FONT\" title=\"associated constant iced_core::text::Renderer::ICON_FONT::ICON_FONT\"><code>ICON_FONT</code></a>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.ARROW_DOWN_ICON\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#156\">source</a><a href=\"#associatedconstant.ARROW_DOWN_ICON\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"iced_core/text/trait.Renderer.html#associatedconstant.ARROW_DOWN_ICON\" class=\"constant\">ARROW_DOWN_ICON</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.char.html\">char</a> = &#39;\\u{e800}&#39;</h4></section></summary><div class='docblock'>The <code>char</code> representing a ▼ icon in the built-in <a href=\"iced_core/text/trait.Renderer.html#associatedconstant.ICON_FONT\" title=\"associated constant iced_core::text::Renderer::ICON_FONT::ICON_FONT\"><code>ICON_FONT</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_font\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#158\">source</a><a href=\"#method.default_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/text/trait.Renderer.html#tymethod.default_font\" class=\"fn\">default_font</a>(&amp;self) -&gt; &lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a> as <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_core/text/trait.Renderer.html#associatedtype.Font\" title=\"type iced_core::text::Renderer::Font\">Font</a></h4></section></summary><div class='docblock'>Returns the default <a href=\"iced_core/text/trait.Renderer.html#associatedtype.Font\" title=\"associated type iced_core::text::Renderer::Font::Font\"><code>Self::Font</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#162\">source</a><a href=\"#method.default_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/text/trait.Renderer.html#tymethod.default_size\" class=\"fn\">default_size</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_core/pixels/struct.Pixels.html\" title=\"struct iced_core::pixels::Pixels\">Pixels</a></h4></section></summary><div class='docblock'>Returns the default size of <a href=\"iced_core/text/struct.Text.html\" title=\"struct iced_core::text::Text\"><code>Text</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_font\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#166\">source</a><a href=\"#method.load_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/text/trait.Renderer.html#tymethod.load_font\" class=\"fn\">load_font</a>(&amp;mut self, bytes: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>]&gt;)</h4></section></summary><div class='docblock'>Loads a <a href=\"iced_core/text/trait.Renderer.html#associatedtype.Font\" title=\"associated type iced_core::text::Renderer::Font::Font\"><code>Self::Font</code></a> from its bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_paragraph\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#170-176\">source</a><a href=\"#method.fill_paragraph\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/text/trait.Renderer.html#tymethod.fill_paragraph\" class=\"fn\">fill_paragraph</a>(\n    &amp;mut self,\n    paragraph: &amp;&lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a> as <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_core/text/trait.Renderer.html#associatedtype.Paragraph\" title=\"type iced_core::text::Renderer::Paragraph\">Paragraph</a>,\n    position: <a class=\"struct\" href=\"iced_core/point/struct.Point.html\" title=\"struct iced_core::point::Point\">Point</a>,\n    color: <a class=\"struct\" href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\">Color</a>,\n    clip_bounds: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the given <a href=\"iced_core/text/paragraph/trait.Paragraph.html\" title=\"trait iced_core::text::paragraph::Paragraph\"><code>Paragraph</code></a> at the given position and with the given\n<a href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\"><code>Color</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_editor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#184-190\">source</a><a href=\"#method.fill_editor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/text/trait.Renderer.html#tymethod.fill_editor\" class=\"fn\">fill_editor</a>(\n    &amp;mut self,\n    editor: &amp;&lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a> as <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_core/text/trait.Renderer.html#associatedtype.Editor\" title=\"type iced_core::text::Renderer::Editor\">Editor</a>,\n    position: <a class=\"struct\" href=\"iced_core/point/struct.Point.html\" title=\"struct iced_core::point::Point\">Point</a>,\n    color: <a class=\"struct\" href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\">Color</a>,\n    clip_bounds: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the given <a href=\"iced_core/text/editor/trait.Editor.html\" title=\"trait iced_core::text::editor::Editor\"><code>Editor</code></a> at the given position and with the given\n<a href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\"><code>Color</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#198\">source</a><a href=\"#method.fill_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/text/trait.Renderer.html#tymethod.fill_raw\" class=\"fn\">fill_raw</a>(&amp;mut self, raw: &lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a> as <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_core/text/trait.Renderer.html#associatedtype.Raw\" title=\"type iced_core::text::Renderer::Raw\">Raw</a>)</h4></section></summary><div class='docblock'>Draws the given Raw</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_text\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#202-208\">source</a><a href=\"#method.fill_text\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/text/trait.Renderer.html#tymethod.fill_text\" class=\"fn\">fill_text</a>(\n    &amp;mut self,\n    text: <a class=\"struct\" href=\"iced_core/text/struct.Text.html\" title=\"struct iced_core::text::Text\">Text</a>&lt;'_, &lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a> as <a class=\"trait\" href=\"iced_core/text/trait.Renderer.html\" title=\"trait iced_core::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_core/text/trait.Renderer.html#associatedtype.Font\" title=\"type iced_core::text::Renderer::Font\">Font</a>&gt;,\n    position: <a class=\"struct\" href=\"iced_core/point/struct.Point.html\" title=\"struct iced_core::point::Point\">Point</a>,\n    color: <a class=\"struct\" href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\">Color</a>,\n    clip_bounds: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the given <a href=\"iced_core/text/struct.Text.html\" title=\"struct iced_core::text::Text\"><code>Text</code></a> at the given position and with the given\n<a href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\"><code>Color</code></a>.</div></details></div></details>","Renderer","cosmic::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#260\">source</a><a href=\"#impl-Renderer-for-Renderer\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Geometry\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Geometry\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" class=\"associatedtype\">Geometry</a> = <a class=\"enum\" href=\"iced_renderer/geometry/enum.Geometry.html\" title=\"enum iced_renderer::geometry::Geometry\">Geometry</a></h4></section></summary><div class='docblock'>The kind of geometry this renderer can draw.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#263\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/geometry/trait.Renderer.html#tymethod.draw\" class=\"fn\">draw</a>(&amp;mut self, layers: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;<a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a> as <a class=\"trait\" href=\"iced_graphics/geometry/trait.Renderer.html\" title=\"trait iced_graphics::geometry::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" title=\"type iced_graphics::geometry::Renderer::Geometry\">Geometry</a>&gt;)</h4></section></summary><div class='docblock'>Draws the given layers of <a href=\"iced_graphics/geometry/trait.Renderer.html#associatedtype.Geometry\" title=\"associated type iced_graphics::geometry::Renderer::Geometry::Geometry\"><code>Self::Geometry</code></a>.</div></details></div></details>","Renderer","cosmic::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#66\">source</a><a href=\"#impl-Renderer-for-Renderer\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_layer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#67\">source</a><a href=\"#method.with_layer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/renderer/trait.Renderer.html#tymethod.with_layer\" class=\"fn\">with_layer</a>(&amp;mut self, bounds: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>))</h4></section></summary><div class='docblock'>Draws the primitives recorded in the given closure in a new layer. <a href=\"iced_core/renderer/trait.Renderer.html#tymethod.with_layer\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_translation\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#99-103\">source</a><a href=\"#method.with_translation\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/renderer/trait.Renderer.html#tymethod.with_translation\" class=\"fn\">with_translation</a>(\n    &amp;mut self,\n    translation: <a class=\"struct\" href=\"iced_core/vector/struct.Vector.html\" title=\"struct iced_core::vector::Vector\">Vector</a>,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;mut <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a>)\n)</h4></section></summary><div class='docblock'>Applies a <code>translation</code> to the primitives recorded in the given closure.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fill_quad\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#135-139\">source</a><a href=\"#method.fill_quad\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/renderer/trait.Renderer.html#tymethod.fill_quad\" class=\"fn\">fill_quad</a>(&amp;mut self, quad: <a class=\"struct\" href=\"iced_core/renderer/struct.Quad.html\" title=\"struct iced_core::renderer::Quad\">Quad</a>, background: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced_core/background/enum.Background.html\" title=\"enum iced_core::background::Background\">Background</a>&gt;)</h4></section></summary><div class='docblock'>Fills a <a href=\"iced_core/renderer/struct.Quad.html\" title=\"struct iced_core::renderer::Quad\"><code>Quad</code></a> with the provided <a href=\"iced_core/background/enum.Background.html\" title=\"enum iced_core::background::Background\"><code>Background</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#143\">source</a><a href=\"#method.clear\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/renderer/trait.Renderer.html#tymethod.clear\" class=\"fn\">clear</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Clears all of the recorded primitives in the <a href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\"><code>Renderer</code></a>.</div></details></div></details>","Renderer","cosmic::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#244\">source</a><a href=\"#impl-Renderer-for-Renderer\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"iced_core/svg/trait.Renderer.html\" title=\"trait iced_core::svg::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#245\">source</a><a href=\"#method.dimensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/svg/trait.Renderer.html#tymethod.dimensions\" class=\"fn\">dimensions</a>(&amp;self, handle: &amp;<a class=\"struct\" href=\"cosmic/widget/svg/struct.Handle.html\" title=\"struct cosmic::widget::svg::Handle\">Handle</a>) -&gt; <a class=\"struct\" href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\">Size</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class='docblock'>Returns the default dimensions of an SVG for the given <a href=\"cosmic/widget/svg/struct.Handle.html\" title=\"struct cosmic::widget::svg::Handle\"><code>Handle</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#249-254\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/svg/trait.Renderer.html#tymethod.draw\" class=\"fn\">draw</a>(&amp;mut self, handle: <a class=\"struct\" href=\"cosmic/widget/svg/struct.Handle.html\" title=\"struct cosmic::widget::svg::Handle\">Handle</a>, color: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\">Color</a>&gt;, bounds: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>)</h4></section></summary><div class='docblock'>Draws an SVG with the given <a href=\"cosmic/widget/svg/struct.Handle.html\" title=\"struct cosmic::widget::svg::Handle\"><code>Handle</code></a>, an optional <a href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\"><code>Color</code></a> filter, and inside the provided <code>bounds</code>.</div></details></div></details>","Renderer","cosmic::Renderer"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Renderer-for-Renderer\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#218\">source</a><a href=\"#impl-Renderer-for-Renderer\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"iced_core/image/trait.Renderer.html\" title=\"trait iced_core::image::Renderer\">Renderer</a> for <a class=\"enum\" href=\"iced_renderer/enum.Renderer.html\" title=\"enum iced_renderer::Renderer\">Renderer</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_core/image/trait.Renderer.html#associatedtype.Handle\" class=\"associatedtype\">Handle</a> = <a class=\"struct\" href=\"cosmic/widget/image/struct.Handle.html\" title=\"struct cosmic::widget::image::Handle\">Handle</a></h4></section></summary><div class='docblock'>The image Handle to be displayed. Iced exposes its own default implementation of a <a href=\"iced_core/image/trait.Renderer.html#associatedtype.Handle\" title=\"associated type iced_core::image::Renderer::Handle::Handle\"><code>Handle</code></a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dimensions\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#221-224\">source</a><a href=\"#method.dimensions\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/image/trait.Renderer.html#tymethod.dimensions\" class=\"fn\">dimensions</a>(&amp;self, handle: &amp;<a class=\"struct\" href=\"cosmic/widget/image/struct.Handle.html\" title=\"struct cosmic::widget::image::Handle\">Handle</a>) -&gt; <a class=\"struct\" href=\"iced_core/size/struct.Size.html\" title=\"struct iced_core::size::Size\">Size</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u32.html\">u32</a>&gt;</h4></section></summary><div class='docblock'>Returns the dimensions of an image for the given <a href=\"cosmic/widget/image/struct.Handle.html\" title=\"struct cosmic::widget::image::Handle\"><code>Handle</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_renderer/lib.rs.html#228-234\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_core/image/trait.Renderer.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;mut self,\n    handle: <a class=\"struct\" href=\"cosmic/widget/image/struct.Handle.html\" title=\"struct cosmic::widget::image::Handle\">Handle</a>,\n    filter_method: <a class=\"enum\" href=\"cosmic/widget/image/enum.FilterMethod.html\" title=\"enum cosmic::widget::image::FilterMethod\">FilterMethod</a>,\n    bounds: <a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>,\n    border_radius: [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.f32.html\">f32</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.array.html\">4</a>]\n)</h4></section></summary><div class='docblock'>Draws an image with the given <a href=\"cosmic/widget/image/struct.Handle.html\" title=\"struct cosmic::widget::image::Handle\"><code>Handle</code></a> and inside the provided\n<code>bounds</code>.</div></details></div></details>","Renderer","cosmic::Renderer"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()